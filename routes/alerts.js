var express = require('express');
var alertService = require('../alerts/smsapi');
var router = express.Router();

/* GET LIST OF USERS */
module.exports.sendOTP = function(req, res){
    var toNumber = req.params.toNumber;
    alertService.alerts.sendOTP(toNumber, function(err, isOTPSent){
      if(err){
        console.log(err);
      }
      else{
        res.json({isOTPSent : isOTPSent});
      }
  });
};
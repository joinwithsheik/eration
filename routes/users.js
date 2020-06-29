var express = require('express');
var repository = require('../datalayer/userRepository');
var router = express.Router();

/* GET LIST OF USERS */
module.exports.userList = function(req, res){
  repository.uesrRepository.userList(function(err, rows){
      if(err){
        console.log(err);
      }
      else{
        res.json(rows);
      }
  });
};
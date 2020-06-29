var express = require('express');
var router = express.Router();

/* Default Route */
module.exports.home = function(req, res) {
  res.render('index', { title: 'eRation API' });
};

/* GET NOTIFICATIONS */
module.exports.getNotifications = function(req, res) {
  var notifications = [
    'Extra 2Kg of sugar on Fridays',
    'Diwali package issued in July 1st week',
    'New arrivals - Tea powder & Soap'
  ];

  res.json(notifications);
};
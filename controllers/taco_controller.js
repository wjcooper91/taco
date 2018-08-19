var express = require('express');

var router = express.Router();

var taco = require('../models/taco.js');

router.get('/', function(req, res) {
    taco.selectAll(function(data) {
      var hbsObject = {
        tacos: data
      };
      res.render('index', hbsObject);
    });
  });
  
  router.post('/tacos', function(req, res) {
    taco.insertOne([
      'taco_name'
    ], [
      req.body.taco_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/tacos/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    taco.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });

module.exports = router;
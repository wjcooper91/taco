// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (taco.js) to use its database functions.
var taco = require('../models/taco.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  taco.selectAll(function(data) {
    var hbsObject = {
      tacos: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.get('/api/tacos', function(req, res) {
  taco.selectAll(function(data) {
 res.json(data);
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

router.put('/tacos/:id', function(req, res,) {
  var condition = 'id = ' + req.params.id;

  taco.updateOne({
    devoured: 1
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the taco object
var taco = {
  // Select all taco table entries
  selectAll: function(cb) {
    orm.selectAll('tacos', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('tacos', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('tacos', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (taco_controller.js).
module.exports = taco;
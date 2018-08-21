// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection({
		port: 8889,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'tacos_db'
	});

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
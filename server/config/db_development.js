/* Create connection with local development database. */
//------------------------------------------------------

var mysql = require('mysql');

function connection() {
	this.pool = null;

	this.connectTo = function() {
		this.pool = mysql.createPool({
			host: '127.0.0.1',
			user: 'dev',
			password: 'dev',
			database: 'mean_Practice',
			dateStrings: 'date', // Force MySQL return TIMESTAMP, DATETIME, DATE as string.
			timezone: "local"
		})
	}

	this.getDbConnection = function(callback) {
		this.pool.getConnection(function(error, connection){
			callback(error, connection);
		})
	}
}

module.exports = new connection();
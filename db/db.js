// Load the AWS SDK for Node.js
		var AWS = require('aws-sdk');
		// Set the region 
		// AWS.config.update({endpoint: new AWS.Endpoint('http://localhost:8000')});
		AWS.config.update({region: 'eu-west-1', accessKeyId: 'AKID', secretAccessKey: 'SECRET'});
		// Create the DynamoDB service object
		var ddb = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:2222') });


var DB = function() {
	this.add = function(callback, error_callback) {

		

		var params = {
		    TableName: 'Image',
		    Item: {
		        "Id": {
		        	S: 'aa.png'
		        }
		    }
		};
		console.log("Calling PutItem", ddb);
		ddb.putItem(params, function(err, data) {
		    if (err) error_callback(err);
		    else callback(data);
		});
	}

	this.get = function(callback, error_callback) {

		

		var params = {
		    TableName: 'Image',
		    Limit: 5
		};
		console.log("Calling PutItem", ddb);
		ddb.scan(params, function(err, data) {
		    if (err) error_callback(err);
		    else callback(data);
		});
	}
}

module.exports = new DB();
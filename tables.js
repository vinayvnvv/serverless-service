// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
// AWS.config.update({endpoint: new AWS.Endpoint('http://localhost:8000')});
AWS.config.update({region: 'eu-west-1', accessKeyId: 'AKID', secretAccessKey: 'SECRET'});
// Create the DynamoDB service object
ddb = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:2222') });

var params = {
    TableName: 'Image',
    KeySchema: [
        {
            AttributeName: 'Id',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'Id',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput:  {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};
console.log("Creating the Image table");
ddb.createTable(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else console.log(data); // successful response
});
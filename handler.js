'use strict';

var DB = require('./db/db');


module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!'
    }),
  };

  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


module.exports.add = (event, context, callback) => {

    DB.add(function(data) {
      callback(null, { message: 'Success!', data: data, event });
    }, function(err) {
      callback(null, { message: 'Error!', err: err, event });
    })

};

module.exports.get = (event, context, callback) => {

    DB.get(function(data) {
      callback(null, { message: 'Success!', data: data, event });
    }, function(err) {
      callback(null, { message: 'Error!', err: err, event });
    })

};

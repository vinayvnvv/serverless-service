'use strict';

var DB = require('./db/db');
var Common = require('./services/common');
var timeout = 1200;


module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!'
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


module.exports.add = (event, context, callback) => {

    DB.add(function(data) {
      callback(null, Common.createResponseObj({ message: 'Success!', data: data }, 200));
    }, function(err) {
      callback(null, Common.createResponseObj({ message: 'Error!', err: err }, 400));
    })

};

module.exports.get = (event, context, callback) => {

    DB.get(function(data) {
      callback(null, Common.createResponseObj({ message: 'Success!', data: data },200));
    }, function(err) {
      callback(null, Common.createResponseObj({ message: 'Error!', err: err },400));
    })

};

module.exports.checkInputFolder = (event, context, callback) => {
    var _data = {
      "message": "160 pdfs found in input path.", 
      // "message": "Input path not found.", 
      // "message": "No files in the Input path.", 
      "status": 1,
      "count": 160
    };

    console.log('check input folder module')
    setTimeout(function() {
      callback(null, Common.createResponseObj(_data, 200));
    }, timeout);
      
      // callback(null, Common.createResponseObj({ message: 'Error!', err: err },400));

};

module.exports.checkOutputFolder = (event, context, callback) => {
    var _data = {
      "message": "OutPut path exists.", 
      // "message": "Output path not found.", 
      // "message": "No files in the Input path.", 
      "status": 1,
      "count": 160
    };

    console.log('output path exists')
    setTimeout(function() {
      callback(null, Common.createResponseObj(_data, 200));
    }, timeout);
      
      // callback(null, Common.createResponseObj({ message: 'Error!', err: err },400));

};



module.exports.getProcessPath = (event, context, callback) => {
    var _data = {"input_path" : "home/user", "output_path": "home/out"};

    console.log('check input folder module')
    setTimeout(function() {
      callback(null, Common.createResponseObj(_data, 200));
    }, timeout);
      
      // callback(null, Common.createResponseObj({ message: 'Error!', err: err },400));

};

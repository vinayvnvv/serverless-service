class Common {
	createResponseObj(body, status) {
		var obj = {
		    statusCode: status,
		    body: JSON.stringify(body),
		  };
		 return obj;
	}
}

module.exports = new Common();
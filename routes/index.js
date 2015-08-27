var express = require('express');
var router = express.Router();
var twilio = require('twilio');

/* GET home page. */
router.get('/', function(req, res, next) {
	var resp = new twilio.TwimlResponse();
	resp.message('Hey you!');
	res.writeHead(200, {
	    'Content-Type':'text/xml'
	});
	res.send(resp.toString());
});

router.post('/helloworld', function(req, res, next) {
	console.log(req.body.From);
	console.dir(req.body);

	var resp = new twilio.TwimlResponse();
	resp.message('Hey you!');

	res.writeHead(200, {
	    'Content-Type':'text/xml'
	});
	res.send(resp.toString());
});

module.exports = router;

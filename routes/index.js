var express = require('express');
var router = express.Router();

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

	var resp = new twilio.TwimlResponse();
	resp.message('Hey you!');
	res.writeHead(200, {
	    'Content-Type':'text/xml'
	});
	res.send(resp.toString());
});

module.exports = router;

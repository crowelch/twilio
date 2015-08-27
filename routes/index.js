var express = require('express');
var router = express.Router();
var twilio = require('twilio');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('Hi mom!');
});

router.post('/helloworld', function(req, res, next) {
	console.log(req.body.From);
	console.dir(req.body);

	var resp = new twilio.TwimlResponse();
	resp.message('Hey you!');

	res.type('text/xml');
	res.send(resp.toString());
});

module.exports = router;

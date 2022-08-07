var express = require('express');
var router = express.Router();

var useragent = require('express-useragent');

/* GET users listing. */
router.get('/', function (req, res, next) {
  var source = req.headers['user-agent'],
  ua = useragent.parse(source);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(ua));
});

module.exports = router;

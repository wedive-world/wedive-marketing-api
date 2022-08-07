var express = require('express');
var router = express.Router();

var useragent = require('express-useragent');

/* GET users listing. */
router.get('/', function (req, res, next) {
  var source = req.headers['user-agent'],
  ua = useragent.parse(source);
  
  let url = 'https://wedives.com'
  if (ua.isAndroid) {
    url = 'https://play.google.com/store/apps/details?id=com.wedive.android.app.wedive'
  } else if (ua.isiPhone) {
    //TODO apple app store url
  }
  
  res.redirect(url)
});

module.exports = router;

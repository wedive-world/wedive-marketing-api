var express = require('express');
var router = express.Router();

var useragent = require('express-useragent');

/* GET users listing. */
router.get('/:key', function (req, res, next) {
  const key = req.params.key
  if (!key || !onlyNumbers(key)) {
    res.send(400)
    return
  }

  var source = req.headers['user-agent'],
    ua = useragent.parse(source);

  let url = 'https://wedives.com'
  if (ua.isAndroid) {
    url = 'https://play.google.com/store/apps/details?id=com.wedive.android.app.wedive'
  } else if (ua.isiPhone) {
    //TODO apple app store url
  }

  writeCreateRecord(key, ua.platform)

  res.redirect(url)
});

const {
  Url,
  UrlRecord
} = require('../model').schema

async function writeCreateRecord(key, os) {

  UrlRecord.create({ key: key, os: os }, (err, urlRecord) => {
    if (err) {
      console.error(`writeCreateRecord: err! `, err)
    }
  })
}

async function upsertUrl(input) {
  await Url.findOneAndUpdate(
    { key: input.key },
    input,
    {
      upsert: true
    })
}

function onlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

module.exports = router;

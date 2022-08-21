var express = require('express');
var router = express.Router();

router.post('/', async function (req, res, next) {
    const body = req.body
    console.debug(`${req.baseUrl} ${req.method} body:${JSON.stringify(body)}`)
    if (!body || !body.phoneNumber) {
        res.send(400)
        return
    }

    const refinedPhoneNumber = body.phoneNumber.replace(/[^0-9]/g, "")
    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!regPhone.test(refinedPhoneNumber)) {
        res.send(400)
        return
    }

    await writePhoneNumber(refinedPhoneNumber)
    res.send(200)
});

const {
    PhoneNumber
} = require('../model').schema

async function writePhoneNumber(phoneNumber) {
    await PhoneNumber.create({
        phoneNumber: phoneNumber,
        reason: 'pre-launch'
    })
}

module.exports = router
const express = require('express')
const router = express.Router()
const sign = require('../controller/signupController')


router.post('/signup', sign.signcreate)
router.post('/report', sign.reportcreate)
router.get('/get', sign.getdata)

module.exports = router
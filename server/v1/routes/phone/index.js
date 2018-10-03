// Libraries
var express = require('express');

// Controllers
var PhoneController = require.main.require('./controllers/phone');

var router = express.Router();

router.get('/',  PhoneController.find);

router.get('/:id_phone',  PhoneController.findOne);

module.exports = router;

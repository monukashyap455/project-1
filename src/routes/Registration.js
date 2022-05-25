const express = require("express");
const router = express.Router();
const Registration = require('../controller/Registration')


router.post('/registration',Registration)


module.exports = router;
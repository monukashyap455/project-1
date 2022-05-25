const express = require("express");
const router = express.Router();
const emailConform = require("../controller/emailConform")

router.post('/emailConform', emailConform)



module.exports = router;









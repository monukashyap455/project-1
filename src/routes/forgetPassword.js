const express = require("express");
const router = express.Router();
const forgetpassword = require("../controller/forgetPassword")

router.get('/forgetpassword/:token',forgetpassword)



module.exports = router;









const express = require("express");
const router = express.Router();
const changePassword = require("../controller/passwordChange");
const auth = require("../middleware/auth")
const allUser = require("../controller/allUser")
const Profile = require("../controller/userProfile")
const editProfile = require("../controller/editProfile")





router.get('/admin', auth, async (req, res) => {
    try {
        res.send("Welcome this is admin home page")
    } catch (error) {
        res.send(error)
    }
})
router.get('/allUser',auth, allUser)
router.get('/myprofile',auth, Profile)
router.post('/changePassword', auth, changePassword)
router.put('/editProfile',editProfile)





module.exports = router;
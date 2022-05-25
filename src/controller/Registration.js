const user = require("../model/Registration");
const bcrypt = require("bcrypt");
const validator = require('validator');

const UserContraoller = (req, res,) => {
    //conform password check
    const password = req.body.password
    const cpassword = req.body.conformPassword
    if (!(password == cpassword)) {
        return res.send("password is not match");
    }
    //email check
    if (!(validator.isEmail(req.body.email))) {
        return res.send("invalid email ");
    };
    //strong password check
    const passval = (validator.isStrongPassword(req.body.password, [{
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }]))
    if (!passval) {
        return res.send("please filled the strong password")
    };
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }

        console.log(req.body);
        const userdata = new user({
            username: req.body.username,
            password: hash,
            mobile_no: req.body.mobile_no,
            email: req.body.email,
            userType: req.body.userType,

        })
        //console.log(userdata);
        userdata.save()
            .then((result) => {
                console.log("user register sucessfully");
                res.json(result);
            })
            .catch((err) => {
                res.status(400).json(" Data save error " + err)
                console.log(err);
            })

    })

}

module.exports = UserContraoller;

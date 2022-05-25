const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require('../model/Registration');
const userlogindata = require('../model/Login');

const userLogin = async (req, res, next) => {
    try {
        // console.log(req.cookies.jwt);

        user.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.lenth < 1) {
                    return res.status(401).json({
                        msg: "user not exist"
                    })
                }

                if ((req.cookies.jwt)) {
                    return res.json("User already login")
                }
                //password bcrypt
                bcrypt.compare(req.body.password, user[0].password, async (err, result) => {
                    if (!result) {
                        return res.status(401).json({
                            msg: "password is invalid"
                        })
                    }


                    if (result) {
                        // console.log(result);
                        const token = jwt.sign({
                            user_id: user[0]._id
                        }, 'userkey',
                        );
                        const loginData = new userlogindata({
                            user_id: user[0]._id,
                            email: user[0].email,
                            token: token ,

                        })
                        await loginData.save()


                        // console.log(loginData);

                        const loginID = user[0]._id
                        res.cookie('jwt', token, {
                            expiresIn: '24h',
                        })
                        res.cookie('loginID', user[0]._id)
                        res.cookie('email', user[0].email)
                            .json(user)

                    }

                })
            })

    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = userLogin;
const bcrypt = require("bcrypt");
const user = require("../model/Registration");
const jwt = require('jsonwebtoken');

const forgetpassword = async (req, res) => {
    try {
        const token = req.params.token
        // console.log(token);
        const verifyToken = jwt.verify(token, "hello")
        // console.log(verifyToken.id);
        const userDB = await user.findOne({ _id: verifyToken.id });
        // console.log(userDB);

        const newpassword = req.body.newPassword
        const newcpassword = req.body.newConformPassword
        // new password check
        if (!(newpassword === newcpassword)) {
            return res.send("password is not match");

        }
        // password bcrypt form
        const bcryptpass = await bcrypt.hash(newpassword, 10)

        //    console.log(bcryptpass);
        // updatate the  new password
        const updatePassword = await user.updateOne({ _id: verifyToken.id }, { $set: { password: bcryptpass } })
        // console.log(updatePassword);
        res.json("password change succefulllyy")


    } catch (error) {
        console.log(error, "email not sent");

    }
}
module.exports = forgetpassword;
const user = require('../model/Registration');
const bcrypt = require("bcrypt");


const changePassword = async (req, res) => {
    try {
        const id = req.cookies.loginID
        const email = req.cookies.email
        // console.log(email);
        const userDB = await user.findOne({ _id: id });

        // old password check 
        const matchpass = await bcrypt.compare(req.body.oldPassword, userDB.password)

        if (!matchpass)
            return res.send(" old password are not matched")
        // new password check
        if (!(req.body.newPassword === req.body.newConformPassword)) {
            return res.send("password is not match");

        }
        const bcryptpass = await bcrypt.hash(req.body.newPassword, 10)
        
        // console.log(bcryptpass);
        // updatate the  new password
        const updatePassword = await user.updateOne({ _id:id },{$set: { password: bcryptpass }})
        console.log(updatePassword);
        res.json("password change succefulllyy")

    } catch (error) {
        res.send(error)

    }



}
module.exports = changePassword;
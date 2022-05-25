const user = require("../model/Registration");

const editProfile = async (req, res) => {
    try {
        const id = req.cookies.loginID
        const userDb = await user.findOne({ _id: id });
        // console.log(userDb);
        if (!(userDb)) {
            return res.send("user not login")
        };
        const updateData = await user.updateOne({_id:id},{$set:{
                username: req.body.username,
                mobile_no: req.body.mobile_no,
                email: req.body.email,
                userType: req.body.userType
            }

        })
        res.send("data update sucessfully");


    } catch (error) {
        res.send(error)

    }
}
module.exports = editProfile;
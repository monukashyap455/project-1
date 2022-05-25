const user = require("../model/Registration")

const myProfile = async (req, res) => {

    try {
        const id = req.cookies.loginID
        const userDb = await user.findOne({ _id: id});
        console.log(userDb);

        res.status(400).json(
            {
                "name": userDb.username,
                "mobile_no": userDb.mobile_no,
                "email": userDb.email,
                "Role": userDb.userType
            }
        )

    } catch (error) {
        res.send(error)

    }
}
module.exports = myProfile;
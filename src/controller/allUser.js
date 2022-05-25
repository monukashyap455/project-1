const user = require("../model/Registration")

const allUser = async (req, res) => {
    try {
        const id = req.cookies.loginID
        const userDb = await user.findOne({ _id: id });
        //  console.log(userDb);


        if (userDb.userType === "admin") {
            return res.send("this page is access to only superadmin");
            

        }
        if (userDb.userType === "superAdmin") {
            const userDb = await user.find()
            res.send(userDb)
        }

    } catch (error) {
        res.send(error)

    }
}
module.exports = allUser;
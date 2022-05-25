const auth = require("../middleware/auth")


const logout = (auth,async(req, res) => {
    try {
        const token = req.cookies.jwt

        if (!(token)) {
            return res.send("please login");
        }
        res.clearCookie("jwt")
        res.clearCookie('email')
        res.clearCookie('loginID')
        res.send("logout success");
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = logout;
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt
    // console.log(token);
    if (token == null) {
        return res.status(403).json("token is require for authentication ");
    }
    try {
        const verifyuser = jwt.verify(token, "userkey")
        // console.log(verifyuser);

        next()
    } catch (error) {
        res.status(401).json(error)

    }
}

module.exports = verifyToken;
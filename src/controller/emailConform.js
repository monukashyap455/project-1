const nodemailer = require("nodemailer");
const user = require("../model/Registration")
const jwt = require("jsonwebtoken");

const emailConform=  async (req, res) => {
    try {
        const email = req.body.email
        // check the user email
        const userDB = await user.findOne({ email: email });
        if (!userDB)
            return res.send("this email is not valid")

        //console.log(userDB);

        
        console.log(token);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
                user: "monukashyaptest@gmail.com",
                pass: "monutest",
            },
        })
        await transporter.sendMail({
            from: "monukashyaptest@gmail.com",
            to: userDB.email,
            subject: "password forget",
            html: `<p>You requested for reset password, kindly use this
            <p>http://localhost:5000/forgetpassword/${token}</p>`



        }),
        console.log(token);
            console.log(" sent email");

        res.send("sent mail")
    } catch (error) {
        res.send(error)

    }
}
module.exports = emailConform;
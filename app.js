const express = require("express");
const Login = require("./src/routes/Login");
require("./src/connection/mongoDb")
const Registration = require("./src/routes/Registration");
const product = require("./src/routes/product")
const Logout = require("./src/routes/Logout")
const admin = require("./src/routes/admin")
const cookie = require('cookie-parser');
const app = express();
const emailConform = require("./src/routes/emailConform")
const forgetpassword = require('./src/routes/forgetPassword');
app.use(express.json());
app.use(cookie())


app.use(Registration)
app.use(Login)
app.use(Logout)
app.use(product)
app.use(admin)
app.use(emailConform)
app.use(forgetpassword)



app.listen(5000,()=>console.log('server is running on port 5000'));






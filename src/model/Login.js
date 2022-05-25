const mongoose = require("mongoose");
const ip = require("ip");


const loginSchema = new mongoose.Schema({
    user_id: {
        type: 'ObjectId',
    },
    email: {
        type: String,
    },
    token: {
        type: String,

    },
    ip: {
        type: String,
        default: ip.address()
    },

    createDate: {
        type: Date,
        default: Date.now
    },


})
module.exports = new mongoose.model("loginuser", loginSchema)
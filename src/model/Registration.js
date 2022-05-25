const mongoose = require("mongoose");
const ip = require("ip");

const registrationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    mobile_no: {
        type: String,
        unique: true,
        required: true,
        minLength: 10,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userType: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        default: ip.address()
    },
    createDate: {
        type: Date,
        default: Date.now
    },

});

module.exports = new mongoose.model("user", registrationSchema);
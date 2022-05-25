const mongoose = require("mongoose");

const changePassword = new mongoose.Schema({
    oldPassword: {
        type: String,
        required: true

    },
    newPassword: {
        type: String,
        required: true,
        minLength: 8,
    },
    newConformPassword: {
        type: String,
        required: true
    },

    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = new mongoose.model("user", changePassword);
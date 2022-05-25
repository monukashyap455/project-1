const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/web-app')
    .then(() => {
        console.log("database is connected");
    })
    .catch((err) => {
        console.log("error" + err);
    })
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        rewuired: true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
   
})
module.exports = new mongoose.model("product", productSchema)
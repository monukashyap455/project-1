const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productData = require('../model/product');


const storage = multer.diskStorage({
    destination: './src/productImage/uplods/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({
    storage: storage
}).single('productImage')


router.post('/productUpload', upload, async (req, res, next) => {

    try {
        // console.log(req.file.filename);

        const product = productData({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename
        });
        // image_path generate
        const img_path = path.join(__dirname, `../productImage/uplods/${product.image}`);

        const data = await product.save();
        // console.log(img_path);
        res.json({ "data": data, "image_path": img_path });
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;
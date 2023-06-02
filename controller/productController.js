var express = require('express');
const Product = require('../models/productModel');
const router = express.Router()
const upload=require("../middleware/upload");

router.post('/addProduct',upload.single('file'), (req,res) =>{
    console.log("print.123456789");
    Product.AddProduct(req,res);
    })
    router.post('/addProductLike', (req,res) =>{
        console.log("Like controller call successfully");
        Product.addLikeUnlikeProduct(req,res);
        })

    module.exports = router
    
var express = require('express');
const Product = require('../models/productModel');
const router = express.Router()

router.post('/addProduct', (req,res) =>{
    console.log("print.123456789");
    Product.AddProduct(req,res);
    })

    module.exports = router
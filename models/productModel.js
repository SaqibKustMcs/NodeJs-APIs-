const mongoose = require("mongoose");
const user=require("../models/userModel");




/////////////////////////like Api///////////////////
var likeSchema = mongoose.Schema({


  userId:{
      type:String,
  },
  productId:{
    type:String,
},
  like:{
    type:false,
},



  
    
});
var like = module.exports = mongoose.model('productLike', likeSchema);
module.exports.addLikeUnlikeProduct =async(req, res) => {
  console.log("....................added product............");
  // user
 

  console.log("....................get  users............");

  Product.findOne(({ productName: req.body.productName})).then((product) => {
    if (product) {
      console.log(product);
      // console.log(req.body.productType);
      console.log("user exist");
      res.status(409).json({ success: false, message: 'product already exists with provided name' });
      return;
    }

    if (!product) {
      console.log("productName............. exist");
      
      const product1 = new Product({
          productName: req.body.productName,
          productType:req.body.productType,
          productDetail:req.body.productDetail,
          productPrice: req.body.productPrice,
          sellerId:req.body.userId,
          totalLikes:req.body.totalLikes,
          
          
          
        });
        if(req.file){
          product1.file=req.file.path
        }
        product1.save().then(() => {
            res.status(200).json({ success: true, message: 'product added successfully.',data:product1}, );
          
        }).catch(error=> {
          console.log(error);
          res.status(500).json({ success: false, message: 'Error occurred while creating product.' });
          return;
        });
      
    }
  })

}



///////////////add product api///////////////
var productSchema = mongoose.Schema({
  productName: {
   type: String,
  // required: true
},productType: {
  type: String,
//    required: true
},
productPrice: {
     type: String,
  //    required: true,
  },
  productDetail: {
      type: String,
  //    required: true
  },
  sellerId:{
      type:String,
  },
  file:{
    type:String,
},


totalLikes:{
    type:String,
},

  
    
});
var Product = module.exports = mongoose.model('product', productSchema);


module.exports.AddProduct =async(req, res) => {
    console.log("....................added product............");
    // user
   

    console.log("....................get  users............");

    Product.findOne(({ productName: req.body.productName})).then((product) => {
      if (product) {
        console.log(product);
        // console.log(req.body.productType);
        console.log("user exist");
        res.status(409).json({ success: false, message: 'product already exists with provided name' });
        return;
      }
  
      if (!product) {
        console.log("productName............. exist");
        
        const product1 = new Product({
            productName: req.body.productName,
            productType:req.body.productType,
            productDetail:req.body.productDetail,
            productPrice: req.body.productPrice,
            sellerId:req.body.userId,
            totalLikes:req.body.totalLikes,
            
            
            
          });
          if(req.file){
            product1.file=req.file.path
          }
        //   const allUser=new users
  
          product1.save().then(() => {
              res.status(200).json({ success: true, message: 'product added successfully.',data:product1}, );
            
          }).catch(error=> {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error occurred while creating product.' });
            return;
          });
        
      }
    })
    // .catch(error =>{
    //     res.status(500).json({ success: false, message: 'Error occurred while adding product.' });
    //     return;
    // })
  }


 


       
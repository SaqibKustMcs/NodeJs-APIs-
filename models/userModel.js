const mongoose = require("mongoose");
var bcryptjs = require('bcryptjs');

 
var userSchema = mongoose.Schema({
            email: {
             type: String,
            required: true},
            password: {
               type: String
            }
        });
 
var User = module.exports = mongoose.model('user', userSchema);
module.exports=User;
 

module.exports.GetAllUsers = async (req, res) =>  {
    console.log("...................."); 
    try {
      
      const users = await User.find({});
            res.status(200).json({status:"success",message:"get all user",data:users});
    } catch (err) {
      console.error('Failed to fetch users:', err);
      res.status(500).send('Failed to fetch users');
    }
   
   
  }

module.exports.GetUserById = async (req, res) =>  {
    console.log(".........GetUserByName..........."); 
    try {
      const userId = req.query._id;
      console.log(userId);
      console.log(".........GetUserByName..........."); 

      
      
      
      
          const user = await User.findById(userId);
          console.log(user);
       
            res.json(user);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      res.status(500).send('Failed to fetch users');
    }
  }

  // module.exports.createUser = (req, res) => {
  //   User.findOne({ email: req.body.email }, async (error, user) => {
  //     if (error) {
  //       res.status(500).json({ success: false, message: 'Error occurred while creating account.' });
  //       return;
  //     }
  
  //     if (user) {
  //       res.status(409).json({ success: false, message: 'User already exists with provided email.' });
  //       return;
  //     }
  
  //     if (!user) {
  //       const user = new User({
         
  //         email: req.body.email,
  //         password: req.body.passwordn,
         
      
  //       });
  
  //       // const salt = await bcryptjs.genSalt(10);
  
  //       // if (salt) {
  //       //   const temporaryPassword = generator.generate({
  //       //     length: 10,
  //       //   });
  //       //   const hash = await bcryptjs.hash(temporaryPassword, salt);
  
  //       //   if (hash) {
  //       //     user.password = hash;
  //       //   }
  
  //         user.save((error, user) => {
  //           if (error) {
  //             res.status(500).json({ success: false, message: 'Error occurred while creating account.' });
  //             return;
  //           }
  
  //           if (!error) {
  //             res.status(200).json({ success: true, message: 'Account created successfully.' });
  //             // sendNewAccountEmail(user, temporaryPassword);
  //           }
  //         });
  //       }
  //     }
  //   );
  // }





  module.exports.CreateUser = (req, res) => {
    console.log(req.body)
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        console.log("user exist");
        res.status(409).json({ success: false, message: 'User already exists with provided email.' });
        return;
      }
  
      if (!user) {
        
        const user = new User({
          email: req.body.email,
          password: req.body.password,
          
        });
  
          user.save().then(() => {
              res.status(200).json({ success: true, message: 'Account created successfully.',data:{
                email:req.body.email,
                password:req.body.password,
                userName:{
                  firstName:"Muhammad",
                  lastName:"Saqib"
                }
              } }, 
              );
            
          }).catch(error=> {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error occurred while creating account.' });
            return;
          });
        
      }
    }).catch(error =>{
        res.status(500).json({ success: false, message: 'Error occurred while creating account.' });
        return;
    })
  }
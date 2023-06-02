const mongoose = require("mongoose");
const multer=require("multer");
const bodyParser = require('body-parser');
var appointmentSchema = mongoose.Schema({
    name: {
     type: String,
    required: false
},
    email: {
       type: String,
       required: false,
    },
    phone: {
        type: String,
       required: false
    },
    avatar:{
      type:String,

    }
      
});

var Appointment1 = module.exports = mongoose.model('appointments', appointmentSchema);

module.exports.addAppointments = async (req, res) =>  {
 


    console.log(".........GetUserByName......1....."); 
    try {

      //
      console.log(".........GetUserByName.....2......"); 
      const appointment = new Appointment1({
        name: req.body.name,
        email: req.body.email,
      phone: req.body.phone,
        
      });
      if(req.file){
        appointment.avatar=req.file.path
      }
      console.log(appointment)
       appointment.save()

      
        console.log(".........GetUserByName......save....."); 
       res.status(200).json({success:true,message:"add successfully",data:{appointment
        
       }})










      //
    } catch (error) {
      console.error(error);
      // Expected output: ReferenceError: nonExistentFunction is not defined
      // (Note: the exact output may be browser-dependent)
    }
    
  }
        
  module.exports.GetAllAppointments = async (req, res) =>  {
    console.log("...................."); 
    try {
      
      const appointment = await Appointment1.find({});
            res.status(200).json({status:"success",message:"get all Appointment",data:appointment});
    } catch (err) {
      console.error('Failed to fetch Appointment :', err);
      res.status(500).send('Failed to fetch Appointment');
    }
   
   
  }
     


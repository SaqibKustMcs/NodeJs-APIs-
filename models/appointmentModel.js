const mongoose = require("mongoose");
var appointmentSchema = mongoose.Schema({
    name: {
     type: String,
    required: true
},
    email: {
       type: String,
       required: true,
    },
    phone: {
        type: String,
       required: true
    },
      
});

var Appointment1 = module.exports = mongoose.model('appointments', appointmentSchema);

module.exports.addAppointments = async (req, res) =>  {


    console.log(".........GetUserByName..........."+req.query); 
    try {

      //
      console.log(".........GetUserByName..........."); 
      const appointment = new Appointment1({
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        
      });
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
     


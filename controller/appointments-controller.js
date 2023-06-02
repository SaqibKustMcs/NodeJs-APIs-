var express = require('express');
const Appointment = require('../models/appointmentModel');
const router = express.Router()
const upload=require("../middleware/upload");

router.post('/create-appointment',upload.single('avatar'), (req,res) =>{
   
    Appointment.addAppointments(req,res);
    })
    

    router.get('/getAllAppointments', (req,res) =>{
   
        Appointment.GetAllAppointments(req,res);
        })

    module.exports = router
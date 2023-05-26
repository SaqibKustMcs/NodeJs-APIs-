var express = require('express');
const Appointment = require('../models/appointmentModel');
const router = express.Router()

router.post('/create-appointment', (req,res) =>{
   
    Appointment.addAppointments(req,res);
    })
    

    router.get('/getAllAppointments', (req,res) =>{
   
        Appointment.GetAllAppointments(req,res);
        })

    module.exports = router
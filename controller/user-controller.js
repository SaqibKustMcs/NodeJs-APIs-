var express = require('express');
const User = require('../models/userModel')
const router = express.Router()

router.post('/create-user', (req,res) =>{
User.CreateUser(req,res);
})
router.get('/getAllUsers', (req,res) =>{
    User.GetAllUsers(req,res);
    })
router.get('/getUsersbyid', (req,res) =>{
        User.GetUserById(req,res);
        })

module.exports = router
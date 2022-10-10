const express=require('express')
const userRouter=express.Router()
const mongoose=require('mongoose')
const { createUser,getAllUsers } = require('../controllers/userController')


userRouter.post('/',createUser)
userRouter.get('/',getAllUsers)

module.exports=userRouter
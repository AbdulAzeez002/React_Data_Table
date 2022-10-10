const express=require('express')
const orderRouter=express.Router()
const mongoose=require('mongoose')
const { createOrder,getOrders } = require('../controllers/orderController')


orderRouter.post('/',createOrder)
orderRouter.get('/',getOrders)

module.exports=orderRouter
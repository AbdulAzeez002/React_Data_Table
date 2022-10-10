const Order = require("../models/orderModel");


const createOrder=async(req,res)=>{

    const {userId,productName}=req.body
    try {
        const order = await Order.create({
            productName: productName,
            userId: userId,
                 
          }); 

          res.json(order)
    
    } catch (error) {
        res.json(error)
    }
    
}

const getOrders=async(req,res)=>{
    try {
        const orders=await Order.find({}).populate('userId')
        res.json(orders)

    } catch (error) {
        res.json(error)
    }
    }



module.exports={createOrder,getOrders}
const User = require("../models/userModel");


const createUser=async(req,res)=>{

    console.log(req.body,'body')
    const {firstName,lastName,email}=req.body
    try {
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email      
          }); 

          res.json(user)
    } catch (error) {
        res.json(error)
    }
  
}

const getAllUsers=async(req,res)=>{
try {
    const users=await User.find({}).populate('orders')
    res.json(users)
} catch (error) {
    res.json(error)
}
}


module.exports={createUser,getAllUsers}

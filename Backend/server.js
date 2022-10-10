const express=require('express')
const userRouter = require('./routes/userRoutes')
const orderRouter = require('./routes/orderRoutes')
const app=express()
const connectDB=require('./db/db')

// middleware
app.use(express.json())

app.use('/api/users',userRouter)
app.use('/api/orders',orderRouter)

console.log('hyy')

app.listen(5000,console.log('server running at port 5000'))
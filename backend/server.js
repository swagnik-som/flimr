const express=require('express')
const dotenv=require('dotenv')
const database =require('../backend/utils/database.js')
const userRoutes=require('./routes/userRoutes.js')
const cookieParser = require('cookie-parser')
const cors=require('cors')
database()

dotenv.config({
    path:".env"
})
const app=express()
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use(cookieParser())


const Port=process.env.PORT
const corsoption = {
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true, // Allows cookies in requests
};
app.use(cors(corsoption))
app.use('/api/v1/user',userRoutes)
app.listen(Port,()=>{
    console.log(`The server is running on ${Port}`)
})
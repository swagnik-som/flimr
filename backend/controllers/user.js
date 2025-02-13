const express=require('express');
const User = require('../models/useSchema');
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')

dotenv.config({
    path:".env"
})
const secret=process.env.jwtsecret

const Register=async(req,res)=>{
    try {
        const{username,email,password}=req.body;
        if(!username ||!email || !password){
            return res.status(401).json({
                message:"Invalid data or All filed shoul be there",
                success:false
            })
        }
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({
                message:"User already exist",
                success:false
            })
        }
        const hashedpassword=await  bcryptjs.hash(password,10)
        await User.create({
            username,email,password:hashedpassword
        })
        return res.status(200).json({
            message:"Account created successfully",
            success:true
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message:"Internal server error in register section..."
        })
    }
}
const login=async(req,res)=>{
try {
    const {email,password}=req.body 
    if(!email|| !password){
        return res.status(400).json({
            message:"all fields are required...",
            success:false

        })
    }
    const user=await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:"user does't exist",
            success:false
        })
    }
    const ismatch=await bcryptjs.compare(password,user.password)
    if(!ismatch){
        return res.status(401).json({
            message:"invalid email ...",
            success:false
        })
    }
    const token=await jwt.sign({id:user._id},secret,{expiresIn:"3d"})
    return res.status(200).cookie('tokenn',token,{httpOnly:true}).json({
        message:`welcome back ${user.username}`
        ,success:true,
        user
    })
} catch (error) {
    console.log(error.message)
    return res.status(500).json({
        message:"Internal server error in login section..."
    })
}
}
const logout=async(req,res)=>{
    return res.status(200).cookie("tokenn", "", {
        expires: new Date(0), // Set expiry to past date
        httpOnly: true,
    }).json({
        message: "Successfully logged out",
        success: true,
    });
}
module.exports={Register,login,logout}
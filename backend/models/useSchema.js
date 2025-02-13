const express=require('express')
const mongoose=require('mongoose')
const useSchema=new mongoose.Schema({
username:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true 
},password:{
    type:String,
    require:true
}
},{timeStamps:true})
const User=mongoose.model('User',useSchema)
module.exports=User
const express=require('express')
const {Register,login, logout} = require('../controllers/user.js')
// const login=require('../controllers/user.js')
const router=express.Router()

router.post('/register',Register)
router.post('/login',login)
router.get('/logout',logout)
module.exports=router
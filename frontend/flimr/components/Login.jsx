import React, { useState } from 'react';
import Header from './Header';
import bgtwo from '../assets/bgtwo.jpg';
import axios from 'axios'
import { api_key } from '../utils/constant';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../src/redux/useSlice';
import store from '../src/redux/store';
const Login = () => {
    const[islogin,setislogin]=useState(true)
    const[username,setUsername]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const isloading=useSelector((store)=>store.app.isloading)
    const onhandlelogin=()=>{
        setislogin(!islogin)
    }
  const getinputsdata=async(e)=>{
e.preventDefault()
dispatch(setLoading(true))
if(islogin){
try {
  const res=await axios.post(`${api_key}/login`,{email,password},{
    headers:{
      'Content-Type':'application/json'
    },
    withCredentials:true
  })
  toast.success("successfully loggedin...")
  dispatch(setUser(res.data.user))
  navigate('/browse')
console.log(res)
} catch (error) {
  console.log(error)
  toast.error(error.response.data.message)
}finally{
  dispatch(setLoading(false))
}
}else{
  try {
    const res=await axios.post(`${api_key}/register`,{username,email,password},{
      headers:{
        'Content-Type':'application/json'
      },
      withCredentials:true
    })
    console.log(res)
    toast.success("successfully registerd...")
    setislogin(true)
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }
}


// setUsername("")
// setemail("")
// setpassword("")
    }
  return (
    <>
      <Header />
      {/* Background Image with Overlay */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          className="absolute w-full h-full object-cover"
          src={bgtwo}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Login Form */}
        <form onSubmit={getinputsdata} className="relative bg-black p-8 rounded-lg shadow-lg w-[90%] max-w-md">
          <h2 className="text-2xl text-white font-bold text-center mb-6 text-gray-800">{islogin ?"Login":"Signin"}</h2>
          <div className="flex flex-col gap-4">

            {!islogin &&
             <input
             type="text"
             placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}
             className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
           />
            }
           
            <input
              type="email"
              placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
            />
            <input
              type="text"
              placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
            />
            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
            <p className='text-white'>{islogin?"Already have an account ?":"New to Filmr !"} <span onClick={onhandlelogin} className='text-white cursor-pointer ml-2'>{`${isloading?"loading...":(islogin?"Login":"Signup")}`} </span></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

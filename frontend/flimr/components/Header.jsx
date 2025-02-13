import React from 'react'
import logo from '../assets/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { api_key } from '../utils/constant'
import { setUser } from '../src/redux/useSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { settoggle } from '../src/redux/movieSlice'
const Header = () => {
  const user=useSelector((store)=>store.app.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const onlogouthandler=async()=>{
try {
  const res=await axios.get(`${api_key}/logout`)
console.log(res)
if(res.data.success){
  toast.success(res.data.message)
}
dispatch(setUser(null))
navigate('/')
} catch (error) {
  console.log(error)
}
  }
  // console.log(user)
  const togglehandler=()=>{
    dispatch(settoggle())
  }
  return (
    

    <div className='absolute z-10 w-full bg-gradient-to-b from-black px-6 py-2 flex items-center justify-between  '>
        <img src={logo} className='w-16 h-16 ' alt="" />
{user && (

<div>
<h1></h1>
<div className='flex ml-4 '>
  <h1 className='text-lg text-white font-medium mr-2 bg-amber-600 px-3 py-2'>{user.username}</h1>
    <button onClick={togglehandler} className='bg-red-600 text-white px-4 py-2 '>search Movies</button>
<button onClick={onlogouthandler} className='bg-red-600 text-white px-4 py-2 ml-4'>Logout</button>
</div>

        </div>
)}
        {/* <div>
<h1></h1>
<div className='flex ml-4 '>
    <button className='bg-red-600 text-white px-4 py-2 '>search Movies</button>
<button className='bg-red-600 text-white px-4 py-2 ml-4'>Logout</button>
</div>

        </div> */}
    </div>
  
  )
}

export default Header
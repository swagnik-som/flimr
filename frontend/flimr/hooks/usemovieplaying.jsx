import axios from 'axios'
import React from 'react'
import { now_playing, options } from '../utils/constant'
import { useDispatch } from 'react-redux'
// import { now_playing, options } from '../utils/constant'
import { getnowplayingmovies } from '../src/redux/movieSlice'
const usemovieplaying = async() => {
    const dispatch=useDispatch()
try {
    const res=await axios.get(now_playing,options)
    console.log(res.data.results)
    dispatch(getnowplayingmovies(res.data.results))
} catch (error) {
    console.log(error.message)
}
}

export default usemovieplaying
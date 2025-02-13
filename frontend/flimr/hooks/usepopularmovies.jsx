import axios from 'axios'
import React from 'react'
import { options, popular_movies } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getpopularplaying } from '../src/redux/movieSlice'

const usepopularmovies = async() => {
    const dispatch=useDispatch()
 try {
    const res=await axios.get(popular_movies,options)
console.log(res.data.results)
dispatch(getpopularplaying(res.data.results))
    console.log(res)
 } catch (error) {

    console.log(error.message)
 }
}

export default usepopularmovies
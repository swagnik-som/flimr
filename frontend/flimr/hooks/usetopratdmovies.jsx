import axios from 'axios'
import React from 'react'
import { options, Top_movies } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { gettopratedmovies } from '../src/redux/movieSlice'

const usetopratdmovies = async() => {
    const dispatch=useDispatch()
 try {
    const res=await axios.get(Top_movies,options)
    console.log(res.data.results)
dispatch(gettopratedmovies(res.data.results))
 } catch (error) {
    console.log(error.message)
 }
}

export default usetopratdmovies
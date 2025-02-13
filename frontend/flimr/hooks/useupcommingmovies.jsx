import axios from 'axios'
import React from 'react'
import { options, Upcomming_movies } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getupcommingmovies } from '../src/redux/movieSlice'

const useupcommingmovies = async() => {
    const dispatch=useDispatch()

try {
    const res=await axios.get(Upcomming_movies,options)
    console.log(res)
    dispatch(getupcommingmovies(res.data.results))

} catch (error) {
    console.log(error.message)
}
}

export default useupcommingmovies
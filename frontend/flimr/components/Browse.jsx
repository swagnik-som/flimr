import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Maincontainer from './Maincontainer'
import Moviecontainer from './Moviecontainer'
import axios from 'axios'
import { now_playing, options } from '../utils/constant'
import { getnowplayingmovies } from '../src/redux/movieSlice'
import usemovieplaying from '../hooks/usemovieplaying'
import usepopularmovies from '../hooks/usepopularmovies'
import usetopratdmovies from '../hooks/usetopratdmovies'
import useupcommingmovies from '../hooks/useupcommingmovies'
import Searchmovies from './Searchmovies'
const Browse = () => {
  const user=useSelector((store)=>store.app.user)
  const toggle=useSelector((store)=>store.movie.toggle)
const navigate=useNavigate()
const dispatch=useDispatch()
usemovieplaying()
usepopularmovies()
usetopratdmovies()
useupcommingmovies()
useEffect(()=>{
  if(!user){
    navigate('/')
  }
  
},[])

  return (

    
    <>
      <Header/>
        <div>
            {
              toggle ? <Searchmovies/> :  
              <>
              <Maincontainer/>
              <Moviecontainer/>
              </>
            }
          
        </div>
        
    </>
  )
}

export default Browse
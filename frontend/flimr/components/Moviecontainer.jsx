import React from 'react'
import Movielist from './Movielist'
import {useSelector} from 'react-redux'
const Moviecontainer = () => {
  const movie=useSelector((store)=>store.movie)

  return (
    <div className='bg-black'>
      <div className='-mt-52 z-10 relative'>
      <Movielist title={"popular movies"} movies={movie.popularmovies} />
      <Movielist title={"Toprated  movies"} movies={movie.nowplayingMovies} />
      <Movielist title={"Nowplaying movies"} movies={movie.topratedmovies} />
      <Movielist title={"Upcomming movies"} movies={movie.upcommingmovies} />
      </div>

    </div>
  )
} 

export default Moviecontainer
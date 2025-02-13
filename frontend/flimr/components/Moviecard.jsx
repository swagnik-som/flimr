import React from 'react'
import { TMdb_Image } from '../utils/constant'

const Moviecard = ({posterpath}) => {
  return (
    <div className='w-48 pr-2'>
        <img   src={`${TMdb_Image}/${posterpath}`} alt='movie-banner'  />
        hare
    </div>
  )
}

export default Moviecard
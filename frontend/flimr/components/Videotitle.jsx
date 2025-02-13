import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
const Videotitle = () => {
  return (
    <div className='absolute aspect-video text-white pt-[18%]  p-12'>

        <h1 className='text-3xl font-bold'>krishna</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis nostrum alias abi!</p>
        <div className='flex mr-3'>
            <button className='flex items-center px-6 py-2 bg-white text-black rounded-full hover:bg-opacity-80'>
<FaPlay/>
                <span>play</span>
            </button>
            <button className='flex items-center ml-2 px-6 py-2 bg-white text-black rounded-full'>
                <MdOutlineInfo/>
                <span>Watch more</span></button>
        </div>
    </div>
  )
}

export default Videotitle
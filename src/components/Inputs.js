import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Inputs() {
  return (
    <div className=' flex flex-row my-6 justify-around'>
    <div className='flex flex-row w-3/4 justify-center items-center space-x-4'>
    <input 
    placeholder='search city...' 
    type='text' 
    className="font-light p-2 w-full focus: outline-none capitalize placeholder:lowercase">

    </input>
    <UilSearch size={25} className="text-white transition ease-out hover:scale-125" />
    <UilLocationPoint size={25} className="text-white transition ease-out hover:scale-125" /> 
    </div>
    <div className='flex flex-row w-1/4 justify-center items-center space-x-1'>
    <button className='text-2xl text-white '>°C</button>
    <p className='text-white text-2xl'>|</p>
    <button className='text-2xl text-white '>°F</button>
    </div>
    </div>
  )
}

export default Inputs
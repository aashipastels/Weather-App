import React from 'react'

function Timelocation(props) {
  
  return (
    <div>
        <div className='flex flex-row my-6 text-center justify-center'>
            <p className='text-white font-extralight '>{props.dateTime} </p>
        </div>
        <div className='flex flex-row my-3 text-center justify-center'>
            <h1 className='text-white font-medium text-2xl'>{props.name}</h1>
        </div>
    </div>
  )
} 

export default Timelocation;
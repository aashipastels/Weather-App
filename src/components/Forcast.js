import React from 'react'

function Forcast(props) {
  return (
    <div className='text-white'>
        <div className='flex  justify-start '>
        <p className='mt-5 font-medium uppercase'>{props.title}</p>
        </div>
        <hr className='my-2'></hr>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>4:00 PM</p>
                <img alt= ''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>4:00 PM</p>
                <img alt= '' />
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>4:00 PM</p>
                <img alt= ''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>4:00 PM</p>
                <img alt= ''/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>4:00 PM</p>
                <img alt= ''/>
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forcast
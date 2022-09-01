import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind, 
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons';
function TemperatureDetails(props) {
  return (
    <div>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300 capitalize'><p>{props.description}</p></div>
    <div className='flex items-center flex-row justify-between py-3 text-white'>
        <img src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`}    
        alt=''></img>
        <p className='text-5xl'>{`${props.temp}°`}</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center space-x-2'>
                <UilTemperature size={18} />
                Real Feel:
                <span className='font-medium'>{`${props.feelsLike}°`}</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center space-x-2'>
                <UilTear size={18} />
                Humidity:
                <span className='font-medium'>{`${props.humidity}%`}</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center space-x-2'>
                <UilWind size={18} />
                Wind:
                <span className='font-medium'>{`${props.wind}m/s`}</span>
            </div>
        </div>

    </div>
    <div className='flex flex-row justify-center items-center space-x-3 py-5'>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilSun />
            Rise:
            <span className='font-medium'>{props.rise}</span>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilSunset />
            Set:
            <span className='font-medium'>{props.set}</span>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilArrowUp />
            High:
            <span className='font-medium'>{`${props.maxT}°`}</span>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilArrowDown />
            Low:
            <span className='font-medium'>{`${props.minT}°`}</span>
        </div>
    </div>
    </div>
  )
}

export default TemperatureDetails
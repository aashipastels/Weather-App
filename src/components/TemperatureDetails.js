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
function TemperatureDetails() {
  return (
    <div>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'><p>Cloudy</p></div>
    <div className='flex items-center flex-row justify-between py-3 text-white'>
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fclipart.world%2Fwp-content%2Fuploads%2F2021%2F08%2FRain-clipart-transparent-background.png&imgrefurl=https%3A%2F%2Fclipart.world%2Frain-clipart%2Frain-clipart-transparent-background%2F&tbnid=u4kQAGfvRfGIlM&vet=12ahUKEwjrwteytOb5AhUDjtgFHdBUAdgQMygGegUIARDvAQ..i&docid=TscKfoG0Idrl1M&w=800&h=753&q=rain%20clipart&hl=en&ved=2ahUKEwjrwteytOb5AhUDjtgFHdBUAdgQMygGegUIARDvAQ'
        alt='rain'></img>
        <p className='text-5xl'>19°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center space-x-2'>
                <UilTemperature size={18} />
                Real Feel:
                <span className='font-medium'>18°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center space-x-2'>
                <UilTear size={18} />
                Humidity:
                <span className='font-medium'>43%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center space-x-2'>
                <UilWind size={18} />
                Wind:
                <span className='font-medium'>3Km/h</span>
            </div>
        </div>

    </div>
    <div className='flex flex-row justify-center items-center space-x-8 py-5'>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilSun />
            Rise:
            <span className='font-medium'>04:50AM</span>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilSunset />
            Set:
            <span className='font-medium'>07:50AM</span>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilArrowUp />
            High:
            <span className='font-medium'>21°</span>
        </div>
        <div className='flex flex-row justify-center items-center space-x-1 text-white font-light'>
            <UilArrowDown />
            Low:
            <span className='font-medium'>17°</span>
        </div>
    </div>
    </div>
  )
}

export default TemperatureDetails
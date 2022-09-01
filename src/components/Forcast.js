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
                <p className='text-sm font-light'>{props.dt1}</p>
                <img alt= '' src={`http://openweathermap.org/img/wn/${props.weather1}@2x.png`}/>
                <p className='font-medium'>{`${props.temp1}°`}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>{props.dt2}</p>
                <img alt= '' src={`http://openweathermap.org/img/wn/${props.weather2}@2x.png`} />
                <p className='font-medium'>{`${props.temp2}°`}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>{props.dt3}</p>
                <img alt= '' src={`http://openweathermap.org/img/wn/${props.weather3}@2x.png`}/>
                <p className='font-medium'>{`${props.temp3}°`}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>{props.dt4}</p>
                <img alt= '' src={`http://openweathermap.org/img/wn/${props.weather4}@2x.png`}/>
                <p className='font-medium'>{`${props.temp4}°`}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>{props.dt5}</p>
                <img alt= '' src={`http://openweathermap.org/img/wn/${props.weather5}@2x.png`}/>
                <p className='font-medium'>{`${props.temp5}°`}</p>
            </div>
        </div>
    </div>
  )
}

export default Forcast
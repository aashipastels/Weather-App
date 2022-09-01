import React, { useRef} from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
//import { fetchApi } from './Services';
function Inputs(props) {
  const searchRef= useRef();
  function searchHandler(){
    const country= searchRef.current.value;
    props.searchHandler(country);
  }
  function clickHandler(event){
    const tempIn= event.target.name;
    console.log(tempIn);  
    props.tempInHandler(tempIn);
  }
  function navigateHandler(){
    function success(position){
      props.navigateHandler(position.coords.latitude, position.coords.longitude);

    }
    navigator.geolocation.getCurrentPosition(success);
  }

  return (
    <div className=' flex flex-row my-6 justify-around'>
    <div className='flex flex-row w-3/4 justify-center items-center space-x-4'>
    <input 
    ref={searchRef}
    placeholder='search city...' 
    type='text' 
    className="font-light p-2 w-full focus: outline-none capitalize placeholder:lowercase">

    </input>
    <UilSearch onClick={searchHandler} size={25} className="text-white transition ease-out hover:scale-125" />
    <UilLocationPoint onClick={navigateHandler} size={25} className="text-white transition ease-out hover:scale-125" /> 
    </div>
    <div className='flex flex-row w-1/4 justify-center items-center space-x-1'>
    <button onClick={clickHandler} name="°C" className='text-2xl text-white '>°C</button>
    <p className='text-white text-2xl'>|</p>
    <button onClick={clickHandler} name="°F" className='text-2xl text-white '>°F</button>
    </div>
    </div>
  )
}

export default Inputs
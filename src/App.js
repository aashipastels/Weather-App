
//import UilReact from '@iconscout/react-unicons/icons/uil-react'

import './App.css';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import  { fetchApiWeather } from './components/Services';
import TemperatureDetails from './components/TemperatureDetails';
import Timelocation from './components/Timelocation';
import { useEffect, useState } from 'react';
import { fetchApi } from './components/Services';
import { formatToLocalTime } from './components/Services';
import TopButtons from './components/TopButtons';
function App() {
  const [dateTime, setDateTime]= useState("");
  const[inputs, setInputs]= useState([]);
  const[hourlyDataorg, setHourlyData]= useState([{dt:'', temp:'', weather: [{icon:''}]},{dt:'', temp:'', weather: [{icon:''}]},{dt:'', temp:'', weather: [{icon:''}]},{dt:'', temp:'', weather: [{icon:''}]},{dt:'', temp:'', weather: [{icon:''}]}]);
  const[dailyDataorg, setDailyData]= useState([{dt:'', temp: {day: ''}, weather: [{icon: ''}]}, {dt:'', temp: {day: ''}, weather: [{icon: ''}]}, {dt:'', temp: {day: ''}, weather: [{icon: ''}]}, {dt:'', temp: {day: ''}, weather: [{icon: ''}]}, {dt:'', temp: {day: ''}, weather: [{icon: ''}]}]);

  console.log(inputs);
  const [query, setQuery]= useState({
    
    units: 'metric'
  });
  const [country, setCountry]= useState('Paris');
  const [sunrise, setSunrise]= useState('');
  const [sunSet, setSunSet]= useState('');
  const[dt, setdt]= useState([]);
  
  useEffect(()=> {
    async function fetchHandler(){
      let data= await fetchApi(country,query);
      console.log(data);
      let {coord, weather, main, wind, sys, name, dt, timezone}= data;
      dt= Number(dt);
      setInputs([coord.lon, coord.lat,weather[0].description, weather[0].icon, main.temp, main.feels_like, main.temp_min,main.temp_max, main.humidity, wind.speed, sys.sunrise, sys.sunset , name, dt, timezone]);
      console.log(dt, timezone );
      
  
    setDateTime(formatToLocalTime(dt, timezone));
    setSunrise(formatToLocalTime(sys.sunrise, timezone, "hh:mm a"));
    setSunSet(formatToLocalTime(sys.sunset, timezone, "hh:mm a"));
  
    let [hourlyData, dailyData]= await fetchApiWeather(coord.lat, coord.lon, query);
      console.log(hourlyData);
      setHourlyData(hourlyData);
      setDailyData(dailyData);
      setdt([
        formatToLocalTime(hourlyData[0].dt, timezone, "hh:mm a"),
        formatToLocalTime(hourlyData[1].dt, timezone, "hh:mm a"),
        formatToLocalTime(hourlyData[2].dt, timezone, "hh:mm a"),
        formatToLocalTime(hourlyData[3].dt, timezone, "hh:mm a"),
        formatToLocalTime(hourlyData[4].dt, timezone, "hh:mm a"),
        formatToLocalTime(dailyData[0].dt, timezone, "cccc"),
        formatToLocalTime(dailyData[1].dt, timezone, "cccc"),
        formatToLocalTime(dailyData[2].dt, timezone, "cccc"),
        formatToLocalTime(dailyData[3].dt, timezone, "cccc"),
        formatToLocalTime(dailyData[4].dt, timezone, "cccc"),

      ]);

    } 
    fetchHandler();
  },[country, query]);


  function appSearchHandler(coun){
    setCountry(coun);
  }
  function appTempInHandler(tempIn){
    if(tempIn==="°C"){
      setQuery({units: 'metric'});

    }
    else{
      setQuery({units: 'imperical'});
    }
  }
  function appClickHandler(country){
    setCountry(country);
  }
  async function appNavigatehandler(lat, long){
    let [hourlyData, dailyData]= await fetchApiWeather(lat, long, query);
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5c9490d4469beb5d24a51902b18354b3`)
    let data= await response.json();
    let { name}= data;
      
      setCountry (name);
    
      
  }
  console.log(inputs[13]);
  return <div className='max-w-screen-md mx-auto mt-3 py-7 px-32 bg-gradient-to-br from-cyan-600 to-blue-800 h-fit shadow-gray-400'>
    <TopButtons 
      clickHandler= {appClickHandler}
      
    />  
    <Inputs 
    searchHandler={appSearchHandler}
    tempInHandler={appTempInHandler}
    navigateHandler= {appNavigatehandler}
    />
    <Timelocation 
    name= {inputs[12]}
    dateTime= {dateTime}
    
    />
    <TemperatureDetails iconId={inputs[3]}
      description= {inputs[2]}
      temp={inputs[4]}
      feelsLike= {inputs[5]}
      humidity= {inputs[8]}
      wind= {inputs[9]}
      minT={inputs[6]}
      maxT={inputs[7]}
      rise= {sunrise}
      set= {sunSet}
    />
    <Forcast title= "Hourly Forcast" 
      dt1= {dt[0]}
      temp1={hourlyDataorg[0].temp}
      dt2={dt[1]}
      temp2={hourlyDataorg[1].temp}
      dt3={dt[2]}
      temp3={hourlyDataorg[2].temp}
      dt4={dt[3]}
      temp4={hourlyDataorg[3].temp}
      dt5={dt[4]}
      temp5={hourlyDataorg[4].temp}
      weather1= {hourlyDataorg[0].weather[0].icon}
      weather2= {hourlyDataorg[1].weather[0].icon}
      weather3= {hourlyDataorg[2].weather[0].icon}
      weather4= {hourlyDataorg[3].weather[0].icon}
      weather5= {hourlyDataorg[4].weather[0].icon}

    />
    <Forcast title= "Daily Forcast"
      dt1= {dt[5]}
      temp1={dailyDataorg[0].temp.day}
      dt2={dt[6]}
      temp2={dailyDataorg[1].temp.day}
      dt3={dt[7]}
      temp3={dailyDataorg[2].temp.day}
      dt4={dt[8]}
      temp4={dailyDataorg[3].temp.day}
      dt5={dt[9]}
      temp5={dailyDataorg[4].temp.day}
      weather1= {dailyDataorg[0].weather[0].icon}
      weather2= {dailyDataorg[1].weather[0].icon}
      weather3= {dailyDataorg[2].weather[0].icon}
      weather4= {dailyDataorg[3].weather[0].icon}
      weather5= {dailyDataorg[4].weather[0].icon}
       />
    

  </div>
}

export default App;
 //2142378ac3ea3bbf3de2417ce8408ff0

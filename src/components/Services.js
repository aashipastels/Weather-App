import { DateTime } from "luxon";
export async function fetchApi(country,query){
    let response= await fetch('https://api.openweathermap.org/data/2.5/weather?q='+country+'&units='+query.units+'&appid=5c9490d4469beb5d24a51902b18354b3')
    let data= await response.json();
    
     return (data);

}
export async function fetchApiWeather(lat, lon, query){
    let response= await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=`+ lat+ `&lon=`+lon + `&units=`+query.units+ `&appid=e1a83f187847daace6c80158f2ccbe0c`);
    let data= await response.json();
    let hourlyData= data.hourly.slice(1, 6);
    let dailyData= data.daily.slice(1, 6);
    return[data.timezone, hourlyData, dailyData];
}
export  function formatToLocalTime(secs, timeZone, format= "cccc, dd LLL yyyy' | Local Time : 'hh:mm a"){
    return (DateTime.fromSeconds(secs).setZone(timeZone).toFormat(format));
}





// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 5c9490d4469beb5d24a51902b18354b3

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5c9490d4469beb5d24a51902b18354b3

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=e1a83f187847daace6c80158f2ccbe0c

//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e1a83f187847daace6c80158f2ccbe0c

//'https://api.openweathermap.org/data/3.0/onecall?lat=`+ coord.lat+ `&lon=`+coord.lon + `&appid=e1a83f187847daace6c80158f2ccbe0c`
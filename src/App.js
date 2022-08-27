
//import UilReact from '@iconscout/react-unicons/icons/uil-react'

import './App.css';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureDetails from './components/TemperatureDetails';
import Timelocation from './components/Timelocation';

import TopButtons from './components/TopButtons';
function App() {
  
  return <div className='max-w-screen-md mx-auto mt-3 py-7 px-32 bg-gradient-to-br from-cyan-600 to-blue-800 h-fit shadow-gray-400'>
    <TopButtons />  
    <Inputs />
    <Timelocation />
    <TemperatureDetails />
    <Forcast title= "Hourly Forcast" />
    <Forcast title= "Daily Forcast" />

  </div>
}

export default App;
 //2142378ac3ea3bbf3de2417ce8408ff0

import {useContext, useEffect, useState} from 'react';
import Forcast from './Forcast.js'
import Current from './CurentWeather.json'
import {AppContext} from '../../App';


const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


const CurrentWeather = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const {city,cityKey,country} = useContext(AppContext);

    useEffect(()=>{
      if(cityKey){
        getCurrentWeather(cityKey)
      }
    },[cityKey])

  const getCurrentWeather = (key) => {
    // fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
    // .then(res=>res.json())
    // .then(data=>{
    //     setCurrentWeather(data)
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    setCurrentWeather(Current)
  }

  if(currentWeather.length === 0) return null;

  return(
    <div>

      <h4>{city ?  <p>{city} -{country}</p> : null}</h4>
     
      <p>{currentWeather[0].Temperature.Metric.Value}</p>
      <p>{currentWeather[0].WeatherText}</p>
      <p>
        <img src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`} />
      </p>
      <Forcast />
    </div>

 
  )
}
export default CurrentWeather

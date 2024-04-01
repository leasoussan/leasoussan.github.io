import React from "react";
import AutoComplete from './AutoComplete.js';
import CurrentWeather from './CurrentWeather.js'
import  './Weather.css'


const WeatherBox =()=>{


    return(

        <>
        <div className="weather_display">


        <AutoComplete/>
        <CurrentWeather/>
        </div>
        </>
    )
}


export default WeatherBox
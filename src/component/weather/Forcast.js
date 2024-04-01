import { useContext, useState } from "react";
import { AppContext } from "../../App";
import ForcastData from './Forcast.json'




const Forcast =()=>{
const {city,cityKey,country} = useContext(AppContext);
const [forcast, SetForcast]= useState()


const getForcast =() =>{
    // const getData = fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}`);
    // const saveForcast = getData.json();
    const getForcastData = ForcastData
    console.log("saveForcast", getForcastData);
}

return(
    <>
   
    </>
)
}



export default Forcast 
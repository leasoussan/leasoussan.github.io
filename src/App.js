import { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/weather/WeatherBox.js';
import Homepage from './component/Homepage.js';
import Approuter from './AppRouter.js';
export const AppContext = createContext(null);

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [cityKey, setCityKey] = useState()

  return (


    <AppContext.Provider value={{
      city,
      setCity,
      country,
      setCountry,
      cityKey,
      setCityKey
    }}>
      <div className="main">

        <Approuter/>
        


         
      </div>
    </AppContext.Provider>

  );
}

export default App;



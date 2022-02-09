import React, { createContext, useState, useEffect } from 'react'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([])

    const API_KEY = 'fb7afd4f7292786e072d3f53778ebd39'
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.766193&lon=30.526714&exclude=current&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => setWeather(data))
        .catch(e => console.log(e))
    }, [])

    const values = {
        weather,
        setWeather
    }
    
   return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext
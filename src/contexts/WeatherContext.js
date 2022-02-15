import React, { createContext, useState, useEffect } from 'react'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState(['Eskisehir'])

    const API_KEY = 'fb7afd4f7292786e072d3f53778ebd39'
    const url = 'https://api.openweathermap.org/data/2.5/'

    useEffect(() => {
        fetch(`${url}weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`)
        .then(res => res.json())
        .then(data => setWeather(data))
        .catch(e => console.log(e))
    }, [city])

    const values = {
        weather,
        setWeather,
        city,
        setCity
    }
    
   return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext
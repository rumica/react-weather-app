import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext'

function Weather() {

    const { weather, setWeather } = useContext(WeatherContext)
    console.log(weather)

  return (
    <form>
        <input type="text" />
    </form>
  )
}

export default Weather
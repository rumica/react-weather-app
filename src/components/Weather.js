import React, { useContext } from 'react'
import '../App.css'
import WeatherContext from '../contexts/WeatherContext'

function Weather() {

    const { weather, setWeather } = useContext(WeatherContext)
    const { city, setCity } = useContext(WeatherContext)

    const handleCity = (e) => {
      setCity(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(weather)
    }
    
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          onChange={handleCity}/>
      </form>
      <div>
        <div className="city">
          <h2>{weather?.name} / {weather?.sys?.country}</h2>
        </div>
        <div className="temp-field">
          <p>{Math.round(weather?.main?.temp)}°C</p>
          <h5>{Math.round(weather?.main?.temp_min)}°C / {Math.round(weather?.main?.temp_max)}°C</h5>
        </div>
      </div>
    </div>
  )
}

export default Weather
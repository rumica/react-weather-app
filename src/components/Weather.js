import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext'

function Weather() {

    const { weather, setWeather } = useContext(WeatherContext)
    const { city, setCity } = useContext(WeatherContext)

    const handleCity = (e) => {
      setCity(e.target.value)
    }
    
    console.log(weather)

    const handleSubmit = (e) => {
      e.preventDefault()
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          onChange={handleCity}/>
      </form>
      <ul>
        {
          city.map(cit => (
            <div>
              {cit.name}
            </div>

          ))
        }
      </ul>
    </div>
  )
}

export default Weather
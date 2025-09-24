import React from 'react'
import styles from './WeatherDetails.module.css'
import { useWeather } from '../../contexts/WeatherContext'  


function WeatherDetails() {
  const { weatherData } = useWeather();
  // const { wind_speed_10m, precipitation } = weatherData.current_units;
  const {
    wind_speed_10m: windUnit,
    precipitation: precipUnit
  } = weatherData.current_units
  console.log(weatherData);
  const { apparent_temperature, relative_humidity_2m, wind_speed_10m, precipitation } = weatherData.current;
  // const 
  const metrics = [
    { label: "Feels like", value: `${apparent_temperature}°` },
    { label: "Humidity", value: `${relative_humidity_2m}%` },
    { label: "Wind", value: `${wind_speed_10m} ${windUnit}` },
    { label: "Precipitation", value: `${precipitation} ${precipUnit}` },
  ]
  return (
    <div className={styles.weatherDetailsContainer}>
      {metrics.map((item, index) => (
        <div key={index} className={styles.weatherDetails}>
        <p className={`${styles.title} text-preset-6`}>{item.label}</p>
        <h3 className={`${styles.value} text-preset-3`}>{item.value}</h3>
      </div>
      ))}
      
      
    </div>
    
  )
}

export default WeatherDetails
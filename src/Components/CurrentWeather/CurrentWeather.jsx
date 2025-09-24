import React from 'react'
import styles from './CurrentWeather.module.css'    
import { useWeather } from '../../contexts/WeatherContext'
import { formatDate, getWeatherIcon } from './../../utils/helpers'
function CurrentWeather() {
  const { weatherData, location } = useWeather();
  const { current } = weatherData;
  const weatherIcon = getWeatherIcon(current.weather_code, current.is_day);
  console.log(weatherData);
  // console.log(current.weather_code);
  // console.log(current.is_day);
  // console.log(weatherIcon);
  return (
    <section className={styles.currentWeather}>
        <div className={styles.country}>
            <h4 className={`${styles.countryName} text-preset-4`}>{location.name}</h4>
            <p className={`${styles.countryDate} text-preset-6`}>{formatDate(new Date())}</p>
        </div>
        <div className={styles.countryWeather}>
            <img className={styles.weatherIcon} src="/src/assets/images/icon-sunny.webp" alt="sunny" />
            <h1 className={`${styles.temperature} text-preset-1`}>{`${current.temperature_2m}°`}</h1>
        </div>
    </section>
  )
}

export default CurrentWeather
import React from 'react'
import styles from './HourlyForecast.module.css'

function HourlyForecast() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className={styles.hourlyForecastContainer}>
      <div className={styles.hourlyForecast}>
        <h5 className={`${styles.hourlyForecastTitle} text-preset-5`}>Hourly forecast</h5>
        <button className={`${styles.days} text-preset-7`}>Tuesday 
          <img  className={styles.dropdownIcon} src="/src/assets/images/icon-dropdown.svg" alt="dropdown-icon" />
        </button>
        <ul className={styles.dayDropdownContainer}>
          {days.map((day, index) => (
            <li key={index} className={`${styles.day} text-preset-7`}>{day}</li>
          ))}
        </ul>
      </div>
      <div className={styles.hourlyForecastGroupContainer}>
          <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      <div className={styles.hourlyForecastGroup}>
        <div className={styles.forecast}>
          <img className={styles.forecastIcon} src="/src/assets/images/icon-overcast.webp" alt="" />
          <span className={`${styles.time} text-preset-7`}>3 PM</span>
        </div>
        <span className={`${styles.temperature} text-preset-7`}>68°</span>
      </div>
      </div>
      
    </div>
  )
}

export default HourlyForecast
import React from 'react'
import styles from './WeatherDetails.module.css'

function WeatherDetails({ name, value }) {
  return (
    <div className={styles.weatherDetailsContainer}>
      <div className={styles.weatherDetails}>
        <p className={`${styles.title} text-preset-6`}>{name}</p>
        <h3 className={`${styles.value} text-preset-3`}>{value}</h3>
      </div>
      <div className={styles.weatherDetails}>
        <p className={`${styles.title} text-preset-6`}>{name}</p>
        <h3 className={`${styles.value} text-preset-3`}>{value}</h3>
      </div>
      <div className={styles.weatherDetails}>
        <p className={`${styles.title} text-preset-6`}>{name}</p>
        <h3 className={`${styles.value} text-preset-3`}>{value}</h3>
      </div>
      <div className={styles.weatherDetails}>
        <p className={`${styles.title} text-preset-6`}>{name}</p>
        <h3 className={`${styles.value} text-preset-3`}>{value}</h3>
      </div>
    </div>
    
  )
}

export default WeatherDetails
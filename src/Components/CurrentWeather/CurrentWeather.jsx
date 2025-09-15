import React from 'react'
import styles from './CurrentWeather.module.css'    

function CurrentWeather() {
  return (
    <section className={styles.currentWeather}>
        <div className={styles.country}>
            <h4 className={`${styles.countryName} text-preset-4`}>Berline, Germany</h4>
            <p className={`${styles.countryDate} text-preset-6`}>Tuesday, Aug 5, 2025</p>
        </div>
        <div className={styles.countryWeather}>
            <img className={styles.weatherIcon} src="/src/assets/images/icon-sunny.webp" alt="sunny" />
            <h1 className={`${styles.temperature} text-preset-1`}>68°</h1>
        </div>
    </section>
  )
}

export default CurrentWeather
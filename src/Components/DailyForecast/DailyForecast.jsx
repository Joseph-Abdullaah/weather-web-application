import React from 'react'
import styles from './DailyForecast.module.css'

function DailyForecast() {
  return (
    <div className={styles.dailyForecastContainer}>
        <h5 className={`${styles.dailyForecastTitle} text-preset-5`}>Daily forcast</h5>
        <div className={styles.dailyForecastGroup}>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
            <div className={styles.dailyForecast}>
                <p className={`${styles.day} text-preset-6`}>Tue</p>
                <img className={styles.temperatureIcon} src="/src/assets/images/icon-rain.webp" alt="rainIcon" />
                <div className={styles.dailyForecastTemperature}>
                    <span className={`${styles.temperature} text-preset-7`}>68º</span>
                    <span className={`${styles.temperature} text-preset-7`}>57º</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DailyForecast
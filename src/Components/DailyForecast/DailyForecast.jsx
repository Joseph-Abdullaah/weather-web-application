import React from "react";
import styles from "./DailyForecast.module.css";
import { useWeather } from "../../contexts/WeatherContext";
import { getWeatherIcon } from "../../utils/helpers";

function DailyForecast() {
  const { weatherData } = useWeather();

  // Render nothing or a loading indicator if data is not yet available
  if (!weatherData || !weatherData.daily) {
    return null;
  }

  const { time, weather_code, temperature_2m_max, temperature_2m_min } =
    weatherData.daily;

  // Use map for a more declarative approach to transform data
  const dailyData = time.map((dateString, i) => {
    return {
      // Add T00:00:00 to avoid timezone issues where it might show the previous day
      day: new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      weather_code: weather_code[i],
      temperature_2m_max: Math.round(temperature_2m_max[i]),
      temperature_2m_min: Math.round(temperature_2m_min[i]),
    };
  });

  return (
    <div className={styles.dailyForecastContainer}>
      <h5 className={`${styles.dailyForecastTitle} text-preset-5`}>
        Daily forecast
      </h5>
      <div className={styles.dailyForecastGroup}>
        {dailyData.map((day, index) => (
          <div key={index} className={styles.dailyForecast}>
            <p className={`${styles.day} text-preset-6`}>{day.day}</p>
            <img
              className={styles.temperatureIcon}
              src={getWeatherIcon(day.weather_code)}
              alt="weather-icon"
            />
            <div className={styles.dailyForecastTemperature}>
              <span
                className={`${styles.temperature} text-preset-7`}
              >{`${day.temperature_2m_max}º`}</span>
              <span
                className={`${styles.temperature} text-preset-7`}
              >{`${day.temperature_2m_min}º`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;

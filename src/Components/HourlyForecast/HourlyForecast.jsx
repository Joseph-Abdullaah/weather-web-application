import React, { useState, useMemo, useEffect, useRef } from "react";
import styles from "./HourlyForecast.module.css";
import { useWeather } from "../../contexts/WeatherContext";
import { formatTime } from "../../utils/helpers.js";
import { getDayName, getWeatherIcon } from "../../utils/helpers";

function HourlyForecast() {
  const { weatherData } = useWeather();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const dropdownRef = useRef(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Group hourly data by day
  const dailyHourlyForecasts = useMemo(() => {
    if (!weatherData?.hourly) return [];

    const { time, weather_code, temperature_2m } = weatherData.hourly;
    const days = [];
    for (let i = 0; i < 7; i++) {
      const dayData = [];
      for (let j = 0; j < 24; j++) {
        const index = i * 24 + j;
        if (index < time.length) {
          dayData.push({
            time: time[index],
            weather_code: weather_code[index],
            temperature: Math.round(temperature_2m[index]),
          });
        }
      }
      days.push(dayData);
    }
    return days;
  }, [weatherData]);

  const handleDaySelect = (index) => {
    setSelectedDayIndex(index);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Get the forecast for the currently selected day
  const currentDayForecast = dailyHourlyForecasts[selectedDayIndex] || [];

  return (
    <div className={styles.hourlyForecastContainer}>
      <div className={styles.hourlyForecast} ref={dropdownRef}>
        <h5 className={`${styles.hourlyForecastTitle} text-preset-5`}>
          Hourly forecast
        </h5>
        <button
          className={`${styles.days} text-preset-7`}
          onClick={toggleDropdown}
        >
          {getDayName(
            selectedDayIndex,
            dailyHourlyForecasts[selectedDayIndex]?.[0]?.time
          )}
          <img
            className={styles.dropdownIcon}
            style={{transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }}
            src="/public/images/icon-dropdown.svg"
            alt="dropdown-icon"
          />
        </button>
        {isDropdownOpen && (
          <ul
            className={styles.dayDropdownContainer}
            style={{ display: "flex" }}
          >
            {dailyHourlyForecasts.map((dayData, index) => (
              <li
                key={index}
                className={`${styles.day} text-preset-7`}
                onClick={() => handleDaySelect(index)}
              >
                {getDayName(index, dayData[0]?.time)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.hourlyForecastGroupContainer}>
        {currentDayForecast.map((hour, index) => (
          <div key={index} className={styles.hourlyForecastGroup}>
            <div className={styles.forecast}>
              <img
                className={styles.forecastIcon}
                src={getWeatherIcon(hour.weather_code)}
                alt="weather-icon"
              />
              <span className={`${styles.time} text-preset-7`}>
                {formatTime(hour.time)}
              </span>
            </div>
            <span className={`${styles.temperature} text-preset-7`}>
              {hour.temperature}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;

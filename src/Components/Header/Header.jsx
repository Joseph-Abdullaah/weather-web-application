import React from 'react'
import { useState } from 'react'
import { useUnit } from '../../contexts/UnitContext'
import styles from './Header.module.css'

function Header() {
  const { units, toggleBulkUnits, updateUnit } = useUnit();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Determine bulk toggle state and text
  const isImperial = units.temperature === 'fahrenheit';
  const bulkToggleText = isImperial ? 'Switch to Metric' : 'Switch to Imperial';

  // Individual unit selection handlers
  const handleTemperatureSelect = (unit) => {
    const unitValue = unit === 'Celsius (°C)' ? 'celsius' : 'fahrenheit';
    updateUnit('temperature', unitValue);
  };

  const handleWindSpeedSelect = (unit) => {
    const unitValue = unit === 'km/h' ? 'kmh' : 'mph';
    updateUnit('windSpeed', unitValue);
  };

  const handlePrecipitationSelect = (unit) => {
    const unitValue = unit === 'Millimeters (mm)' ? 'mm' : 'inch';
    updateUnit('precipitation', unitValue);
  };

  // Checkmark visibility helpers
  const isTemperatureSelected = (unit) => {
    return (unit === 'Celsius (°C)' && units.temperature === 'celsius') ||
           (unit === 'Fahrenheit (°F)' && units.temperature === 'fahrenheit');
  };

  const isWindSpeedSelected = (unit) => {
    return (unit === 'km/h' && units.windSpeed === 'kmh') ||
           (unit === 'mph' && units.windSpeed === 'mph');
  };

  const isPrecipitationSelected = (unit) => {
    return (unit === 'Millimeters (mm)' && units.precipitation === 'mm') ||
           (unit === 'Inches (in)' && units.precipitation === 'inch');
  };

  return (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src="./src/assets/images/logo.svg" alt="logo" />
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        className={`${styles.units} text-preset-7`}>
        <img className={styles.unitIcon} src="./src/assets/images/icon-units.svg" alt="units" />
        Units
        <img className={styles.dropdownIcon} src="./src/assets/images/icon-dropdown.svg" alt="dropdown" />
      </button>

      {isDropdownOpen && (
        <div className={styles.dropdownMenu}>
          <button 
            onClick={toggleBulkUnits}
            className={`${styles.switchButton} text-preset-7`}>
            {bulkToggleText}
          </button>
          
          <p className={`${styles.p} text-preset-8`}>Temperature</p>
          <div className={styles.temperatureGroup}>
            <button 
              onClick={() => handleTemperatureSelect('Celsius (°C)')}
              className={`${styles.temperatureButton} text-preset-7`}>
              <span>Celsius (°C)</span>
              {isTemperatureSelected('Celsius (°C)') && 
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />}
            </button>
            <button 
              onClick={() => handleTemperatureSelect('Fahrenheit (°F)')}
              className={`${styles.temperatureButton} text-preset-7`}>
              <span>Fahrenheit (°F)</span>
              {isTemperatureSelected('Fahrenheit (°F)') && 
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />}
            </button>
          </div>
          
          <hr className={styles.divider} />
          
          <p className={`${styles.p} text-preset-8`}>Wind Speed</p>
          <div className={styles.windSpeedGroup}>
            <button 
              onClick={() => handleWindSpeedSelect('km/h')}
              className={`${styles.windSpeedButton} text-preset-7`}>
              <span>km/h</span>
              {isWindSpeedSelected('km/h') && 
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />}
            </button>
            <button 
              onClick={() => handleWindSpeedSelect('mph')}
              className={`${styles.windSpeedButton} text-preset-7`}>
              <span>mph</span>
              {isWindSpeedSelected('mph') && 
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />}
            </button>
          </div>
          
          <hr className={styles.divider} />
          
          <p className={`${styles.p} text-preset-8`}>Precipitation</p>
          <div className={styles.precipitationGroup}>
            <button 
              onClick={() => handlePrecipitationSelect('Millimeters (mm)')}
              className={`${styles.precipitationButton} text-preset-7`}>
              <span>Millimeters (mm)</span>
              {isPrecipitationSelected('Millimeters (mm)') && 
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />}
            </button>
            <button 
              onClick={() => handlePrecipitationSelect('Inches (in)')}
              className={`${styles.precipitationButton} text-preset-7`}>
              <span>Inches (in)</span>
              {isPrecipitationSelected('Inches (in)') && 
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
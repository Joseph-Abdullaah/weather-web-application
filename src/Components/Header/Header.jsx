import React from 'react'
import { useState } from 'react'
import styles from'./Header.module.css'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('Celsius (°C)');
  const [selectedWindSpeedUnit, setSelectedWindSpeedUnit] = useState('km/h');
  const [selectedPrecipitationUnit, setSelectedPrecipitationUnit] = useState('Millimeters (mm)');
  const [isImperial, setIsImperial] = useState(false);
  
  
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

        {/* dropdown menu panel*/}
        {isDropdownOpen ? <div className={styles.dropdownMenu}>
          <button className={`${styles.switchButton} text-preset-7`}>Switch to Imperial</button>
            <p className={`${styles.p} text-preset-8`}>Temperature</p>
            <div className={styles.temperatureGroup}>
              <button className={`${styles.temperatureButton} text-preset-7`}>
                <span>Celsius (°C)</span>
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />
              </button>
              <button className={`${styles.temperatureButton} text-preset-7`}>
                <span>Fahrenheit (°F)</span>
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />
              </button>
            </div>
            <hr className={styles.divider} />
            <p className={`${styles.p} text-preset-8`}>Wind Speed</p>
            <div className={styles.windSpeedGroup}>
              <button className={`${styles.windSpeedButton} text-preset-7`}>
                <span>km/h</span>
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />
              </button>
              <button className={`${styles.windSpeedButton} text-preset-7`}>
                <span>mph</span>
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />
              </button>
            </div>
            <hr className={styles.divider} />
            <p className={`${styles.p} text-preset-8`}>Precipitation</p>
            <div className={styles.precipitationGroup}>
              <button className={`${styles.precipitationButton} text-preset-7`}>
                <span>Millimeters (mm)</span>
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />
              </button>
              <button className={`${styles.precipitationButton} text-preset-7`}>
                <span>Inches (in)</span>
                <img src="/src/assets/images/icon-checkmark.svg" alt="check" />
              </button>
            </div>
        </div> : null}
        
    </div>
  )
}

export default Header
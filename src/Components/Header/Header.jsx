import React from 'react'
// import { useState } from 'react'
import styles from'./Header.module.css'

function Header() {

  return (
    <div className={styles.headerContainer}>
        <img src="./src/assets/images/logo.svg" alt="logo" />
        <button className={`${styles.units} text-preset-7`}>
            <img className='unit-icon' src="./src/assets/images/icon-units.svg" alt="units" />
            Units
            <img className='dropdown-icon' src="./src/assets/images/icon-dropdown.svg" alt="dropdown" />
        </button>
    </div>
  )
}

export default Header
import React from 'react'
import styles from'./Title.module.css'

function Title() {
  return (
    <div className={styles.titleContainer}>
        <h2 className={`${styles.Title} text-preset-2`}>How's the sky looking today?</h2>
    </div>
  )
}

export default Title
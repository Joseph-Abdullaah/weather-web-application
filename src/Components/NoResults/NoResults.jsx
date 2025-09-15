import React from 'react'
import styles from './NoResults.module.css'

function NoResults() {
  return (
    <h4 className={`${styles.noResults} text-preset-4`}>No search result found</h4>
  )
}

export default NoResults
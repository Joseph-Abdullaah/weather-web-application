import React from 'react'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
        <div className={styles.search}>
            <img className={styles.searchIcon} src="./src/assets/images/icon-search.svg" alt="" />
            <input className={`${styles.searchInput} text-preset-7`} type="text" name='search' id='search' placeholder='Search for a place...' />
        </div>
        <button className={`${styles.searchButton} text-preset-5-medium`}>Search</button>
    </div>
  )
}

export default SearchBar
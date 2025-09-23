import React from 'react'
import styles from './SearchBar.module.css'
import { useState } from 'react'
import { useWeather } from '../../contexts/WeatherContext'

function SearchBar() {
  const [query, setQuery] = useState('')
  const { searchLocations, searchResults, searching, setLocation } = useWeather();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setTimeout(() => {
      console.log(searchLocations(value));
    }, 900);
  };
  console.log(searchResults)
  return (
    <div className={styles.searchContainer}>
        <div className={styles.search}>
            <img className={styles.searchIcon} src="./src/assets/images/icon-search.svg" alt="" />
            <input onChange={handleInputChange} value={query}  className={`${styles.searchInput} text-preset-5-medium`} type="text" name='search' id='search' placeholder='Search for a place...' />
            <ul className={styles.searchResultsContainer}>
              {searchResults && searchResults.map((location, index) => (
                <li key={index} className={`${styles.searchResultItem} text-preset-7`} onClick={() => {
                  setLocation(location);
                  setQuery('');
                }}>
                  {location.name}
                </li>
              ))}
          </ul>
        </div>
        <button className={`${styles.searchButton} text-preset-5-medium`}>Search</button>
    </div>
  )
}

export default SearchBar
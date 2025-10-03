import React from "react";
import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useWeather } from "../../contexts/WeatherContext";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    searchLocations,
    searchResults,
    setLocation,
    loading,
    getUserLocation,
    awaitingPermission
  } = useWeather();
  // Debounce the query to avoid too many API calls
  const debouncedQuery = useDebounce(query, 200);

  // This handles the "search in progress" state automatically
  useEffect(() => {
    if (debouncedQuery.trim()) {
      searchLocations(debouncedQuery);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    await searchLocations(q);

    if (searchResults && searchResults.length > 0) {
      setLocation(searchResults[0]);
      setQuery("");
      setShowDropdown(false);
    } else {
      setShowDropdown(false);
    }
  };

  const handleLocationSelect = (location) => {
    setLocation(location);
    setQuery("");
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    if (query && searchResults.length > 0) {
      setShowDropdown(true);
    }
  };

  const handleInputBlur = () => {
    // Small delay to allow clicking on dropdown items
    setTimeout(() => setShowDropdown(false), 200);
  };

  const handleGeolocationClick = async () => {
    try {
      const userLocation = await getUserLocation();
      // Save location to localStorage for future visits
      localStorage.setItem("weatherLocation", JSON.stringify(userLocation));
      setLocation(userLocation);
    } catch (error) {
      console.log("Geolocation failed:", error.message);
      // Could show a toast notification here if desired
      // For now, we'll just log the error and let the user know through the UI
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchContainer}>
      <div className={styles.searchContainerAndLocationContainer}>
        <div className={styles.search}>
          <img
            className={styles.searchIcon}
            src="/images/icon-search.svg"
            alt="search-icon"
          />
          <input
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={query}
            className={`${styles.searchInput} text-preset-5-medium`}
            type="text"
            name="search"
            id="search"
            placeholder="Search for a place..."
          />

          {loading && (
            <div className={styles.searchInprogressContainer}>
              <img
                className={styles.loadingIcon}
                src="/images/icon-loading.svg"
                alt="loading"
              />
              <p className={`${styles.searchInprogress} text-preset-7`}>
                Search in progress
              </p>
            </div>
          )}

          {awaitingPermission && (
            <div className={styles.searchInprogressContainer}>
              <img
                className={styles.loadingIcon}
                src="/images/icon-loading.svg"
                alt="loading"
              />
              <p className={`${styles.searchInprogress} text-preset-7`}>
                Getting your location...
              </p>
            </div>
          )}

          {showDropdown && (
            <ul className={styles.searchResultsContainer}>
              {searchResults &&
                searchResults.map((location, index) => (
                  <li
                    key={index}
                    className={`${styles.searchResultItem} text-preset-7`}
                    onMouseDown={() => handleLocationSelect(location)}
                  >
                    {location.name}, {location.country}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <button
          type="button"
          onClick={handleGeolocationClick}
          disabled={awaitingPermission}
          className={`${styles.geolocationButton} text-preset-5-medium`}
          title="Use current location"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </button>
      </div>
      
      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className={`${styles.searchButton} text-preset-5-medium`}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

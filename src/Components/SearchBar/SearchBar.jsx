import React from "react";
import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useWeather } from "../../contexts/WeatherContext";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { searchLocations, searchResults, searching, setLocation, loading } =
    useWeather();
  // Debounce the query to avoid too many API calls
  const debouncedQuery = useDebounce(query, 300);

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

    const result = await searchLocations(q);

    if (result && result.length > 0) {
      setLocation(result[0]);
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

  return (
    <form className={styles.searchContainer}>
      <div onSubmit={handleSearch} className={styles.search}>
        <img
          className={styles.searchIcon}
          src="./src/assets/images/icon-search.svg"
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
              src="./src/assets/images/icon-loading.svg"
              alt="loading"
            />
            <p className={`${styles.searchInprogress} text-preset-7`}>
              Search in progress
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
                  {location.name}
                </li>
              ))}
          </ul>
        )}
      </div>
      <button
        type="submit"
        className={`${styles.searchButton} text-preset-5-medium`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

// contexts/WeatherContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeatherData, searchLocations as apiSearch } from '../services/weatherAPI';

const WeatherContext = createContext();

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

export const WeatherProvider = ({ children }) => {
  // State for weather data and location
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({
    name: 'Berlin, Germany',
    latitude: 52.52,
    longitude: 13.405,
  });
  
  // State for search functionality
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  // Function to fetch weather data
  const getWeatherData = async (lat, lon) => {
    setLoading(true);
    setError(null); // Clear any previous errors
    
    try {
      const data = await fetchWeatherData(lat, lon);
      setWeatherData(data);
    } catch (err) {
      setError({ 
        type: 'api', 
        message: 'Failed to fetch weather data. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to search for locations
  const searchLocations = async (query) => {
    // Clear previous errors when starting a new search
    setError(null);
    
    // If query is empty, clear results and exit
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    setSearchResults([]); // Clear previous search results

    try {
      const results = await apiSearch(query);
      setSearchResults(results);
      
      // If no results found, set a search error
      if (results.length === 0) {
        setError({ 
          type: 'search', 
          message: 'No search results found!' 
        });
      }
    } catch (err) {
      setError({ 
        type: 'search', 
        message: 'Failed to search locations. Please try again.' 
      });
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  // Function to set new location and fetch its weather
  const setNewLocation = (newLocation) => {
    setLocation(newLocation);
    setError(null); // Clear errors when changing location
    getWeatherData(newLocation.latitude, newLocation.longitude);
    setSearchResults([]); // Clear search results when location is selected
  };

  // Function to retry the last operation
  const retry = () => {
    setError(null);
    getWeatherData(location.latitude, location.longitude);
  };

  // Fetch weather for default location on app start
  useEffect(() => {
    getWeatherData(location.latitude, location.longitude);
  }, []); // Empty dependency array means this runs once on mount

  // Value object to be provided to consuming components
  const value = {
    // State
    weatherData,
    loading,
    error,
    location,
    searchResults,
    searching,
    
    // Functions
    fetchWeatherData: getWeatherData,
    searchLocations,
    setLocation: setNewLocation,
    retry,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
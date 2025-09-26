// contexts/WeatherContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useUnit } from './UnitContext'; // Import the unit hook
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
  const { units } = useUnit(); // Get current units from UnitContext
  
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

  // Function to fetch weather data - NOW ACCEPTS UNIT PARAMETERS
  const getWeatherData = async (lat, lon, unitParams = units) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(lat, lon, unitParams);
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

  // Function to search for locations (unchanged)
  const searchLocations = async (query) => {
    setError(null);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    setSearchResults([]);

    try {
      const results = await apiSearch(query);
      setSearchResults(results);
      
      if (results.length === 0) {
        setError({ type: 'search', message: 'No search results found!' });
      }
    } catch (err) {
      setError({ type: 'search', message: 'Failed to search locations. Please try again.' });
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  // Function to set new location - uses current units
  const setNewLocation = (newLocation) => {
    setLocation(newLocation);
    setError(null);
    getWeatherData(newLocation.latitude, newLocation.longitude, units);
    setSearchResults([]);
  };

  // NEW: Function to update units and refetch data
  const updateUnitsAndRefetch = (newUnits) => {
    getWeatherData(location.latitude, location.longitude, newUnits);
  };

  // Function to retry the last operation
  const retry = () => {
    setError(null);
    getWeatherData(location.latitude, location.longitude, units);
  };

  // Fetch weather when component mounts OR when units change
  useEffect(() => {
    getWeatherData(location.latitude, location.longitude, units);
  }, [units]); // Now refetches when units change!

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
    updateUnitsAndRefetch, // New function
    retry,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
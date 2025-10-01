// contexts/WeatherContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useUnit } from "./UnitContext"; // Import the unit hook
import {
  fetchWeatherData,
  searchLocations as apiSearch,
} from "../services/weatherAPI";

const WeatherContext = createContext();

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
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
    name: "Berlin, Germany",
    latitude: 52.52,
    longitude: 13.405,
  });

  // Geolocation states
  const [geolocationRequested, setGeolocationRequested] = useState(false);
  const [awaitingPermission, setAwaitingPermission] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  // Function to get user location
  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }

      setAwaitingPermission(true);
      setGeolocationRequested(true);

      navigator.geolocation.getCurrentPosition(
        // Success callback
        async (position) => {
          setAwaitingPermission(false);
          const { latitude, longitude } = position.coords;
          
          try {
            // Reverse geocode to get city name
            const locations = await apiSearch(latitude,longitude);
            console.log(locations);
            const locationName = locations[0]?.name || `Your Location`;
            
            resolve({
              name: locationName,
              latitude,
              longitude
            });
          } catch (geocodeError) {
            resolve({
              name: 'Your Location',
              latitude,
              longitude
            });
          }
        },
        // Error callback
        (error) => {
          setAwaitingPermission(false);
          setPermissionDenied(true);
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject(new Error('Permission denied'));
              break;
            case error.POSITION_UNAVAILABLE:
              reject(new Error('Position unavailable'));
              break;
            case error.TIMEOUT:
              reject(new Error('Request timeout'));
              break;
            default:
              reject(new Error('Unknown error'));
          }
        },
        // Options
        {
          enableHighAccuracy: false,
          timeout: 15000, // 15 second timeout
          maximumAge: 300000 // 5 minutes
        }
      );
    });
  };


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
        type: "api",
        message: "Failed to fetch weather data. Please try again.",
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
        setError({ type: "search", message: "No search results found!" });
      }
    } catch (err) {
      setError({
        type: "search",
        message: "Failed to search locations. Please try again.",
      });
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

  // Check if this is the first visit (no location stored in localStorage)
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    const savedLocation = localStorage.getItem("weatherLocation");
    return !savedLocation;
  });

  // Fetch weather when component mounts OR when units change
  useEffect(() => {
    getWeatherData(location.latitude, location.longitude, units);
  }, [units]); // Now refetches when units change!

  // Auto-detect location on first visit
  useEffect(() => {
    if (isFirstVisit && !geolocationRequested) {
      // Try to get user's location automatically on first visit
      getUserLocation()
        .then((userLocation) => {
          // Save location to localStorage for future visits
          localStorage.setItem("weatherLocation", JSON.stringify(userLocation));
          setLocation(userLocation);
          setIsFirstVisit(false);
          // Fetch weather for user's location
          getWeatherData(userLocation.latitude, userLocation.longitude, units);
        })
        .catch((error) => {
          console.log("Geolocation failed:", error.message);
          // If geolocation fails, keep default location (Berlin)
          setIsFirstVisit(false);
          // Reset geolocation states
          setGeolocationRequested(false);
          setAwaitingPermission(false);
        });
    }
  }, [isFirstVisit, geolocationRequested]);

  // Load saved location on subsequent visits
  useEffect(() => {
    if (!isFirstVisit) {
      const savedLocation = localStorage.getItem("weatherLocation");
      if (savedLocation) {
        try {
          const parsedLocation = JSON.parse(savedLocation);
          setLocation(parsedLocation);
        } catch (error) {
          console.error("Failed to parse saved location:", error);
        }
      }
    }
  }, [isFirstVisit]);

  const value = {
    // State
    weatherData,
    loading,
    error,
    location,
    searchResults,
    searching,
    geolocationRequested,
    awaitingPermission,
    permissionDenied,
    isFirstVisit,

    // Functions
    fetchWeatherData: getWeatherData,
    searchLocations,
    setLocation: setNewLocation,
    updateUnitsAndRefetch, // New function
    retry,
    getUserLocation, // Expose geolocation function
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

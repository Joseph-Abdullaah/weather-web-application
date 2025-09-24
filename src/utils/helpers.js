// utils/helpers.js

// Format date to "Tuesday, Aug 5, 2025"
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Convert WMO weather code to icon name
export const getWeatherIcon = (weatherCode, isDay = 1) => {
  // WMO Weather interpretation codes (WW)
  const weatherMap = {
    0: isDay ? 'clear-day' : 'clear-night',        // Clear sky
    1: isDay ? 'partly-cloudy-day' : 'partly-cloudy-night', // Mainly clear
    2: 'cloudy',                                   // Partly cloudy
    3: 'overcast',                                 // Overcast
    45: 'fog',                                     // Fog
    48: 'fog',                                     // Depositing rime fog
    51: 'drizzle',                                 // Light drizzle
    53: 'drizzle',                                 // Moderate drizzle
    55: 'drizzle',                                 // Dense drizzle
    61: 'rain',                                    // Slight rain
    63: 'rain',                                    // Moderate rain
    65: 'heavy-rain',                              // Heavy rain
    71: 'snow',                                    // Slight snow
    73: 'snow',                                    // Moderate snow
    75: 'heavy-snow',                              // Heavy snow
    80: 'rain',                                    // Slight rain showers
    81: 'rain',                                    // Moderate rain showers
    82: 'heavy-rain',                              // Violent rain showers
    95: 'thunderstorm',                            // Thunderstorm
    96: 'thunderstorm-rain',                       // Thunderstorm with slight hail
    99: 'thunderstorm-rain'                        // Thunderstorm with heavy hail
  };
  
  return weatherMap[weatherCode] || 'not-available';
};

// Get weather description text
export const getWeatherDescription = (weatherCode) => {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Rime fog',
    51: 'Light drizzle',
    61: 'Light rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Light snow',
    73: 'Moderate snow',
    80: 'Light rain showers',
    81: 'Moderate rain showers',
    95: 'Thunderstorm'
  };
  
  return descriptions[weatherCode] || 'Unknown';
};
// Format date to "Tuesday, Aug 5, 2025"
export const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/**
 * Gets the name of the day for a given index.
 * @param {number} index - The day index (0 for today, 1 for tomorrow, etc.).
 * @param {string} dateString - The date string for that day.
 * @returns {string} The name of the day (e.g., "Today", "Tomorrow", "Wednesday").
 */
export const getDayName = (index, dateString) => {
  // if (index === 0) return "Today";
  // if (index === 1) return "Tomorrow";
  return new Date(dateString).toLocaleDateString("en-US", { weekday: "long" });
};

export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    })
    .replace("", " "); // "3PM"
};

// Convert WMO weather code to icon name
export const getWeatherIcon = (weatherCode) => {
  // Map WMO codes to your 8 available icon names
  const weatherMap = {
    // sunny
    0: "sunny", // Clear sky
    // partly-cloudy
    1: "partly-cloudy", // Mainly clear
    2: "partly-cloudy", // Partly cloudy
    // overcast
    3: "overcast", // Overcast
    // fog
    45: "fog", // Fog
    48: "fog", // Depositing rime fog
    // drizzle
    51: "drizzle", // Light drizzle
    53: "drizzle", // Moderate drizzle
    55: "drizzle", // Dense drizzle
    56: "drizzle", // Freezing Drizzle: Light
    57: "drizzle", // Freezing Drizzle: Dense
    // rain
    61: "rain", // Slight rain
    63: "rain", // Moderate rain
    65: "rain", // Heavy rain
    66: "rain", // Freezing Rain: Light
    67: "rain", // Freezing Rain: Heavy
    80: "rain", // Slight rain showers
    81: "rain", // Moderate rain showers
    82: "rain", // Violent rain showers
    // snow
    71: "snow",
    73: "snow",
    75: "snow", // Snow fall
    77: "snow", // Snow grains
    85: "snow",
    86: "snow", // Snow showers
    // storm
    95: "storm", // Thunderstorm
    96: "storm",
    99: "storm", // Thunderstorm with hail
  };

  const iconName = weatherMap[weatherCode] || "sunny"; // Default to sunny if code is unknown
  return `/public/images/${iconName}.webp`;
};

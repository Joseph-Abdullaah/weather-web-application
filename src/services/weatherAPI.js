export const fetchWeatherData = async (latitude, longitude, unitParams = {}) => {

    try {
        const baseUrl = 'https://api.open-meteo.com/v1/forecast?';
        const params = new URLSearchParams({
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,is_day',
            hourly: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,',
            daily: 'weather_code,temperature_2m_max,temperature_2m_min,',
            timezone: 'auto',
            temperature_unit: unitParams.temperature || 'celsius',
            wind_speed_unit: unitParams.windSpeed || 'kmh',
            precipitation_unit: unitParams.precipitation || 'mm'
        });

        const url = `${baseUrl}${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Weather API error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
};





export async function searchLocations(query) {
    if (!query.trim()) {
        return [];
    };

    try {
        const baseUrl = "https://nominatim.openstreetmap.org/search?";
        const params = new URLSearchParams({
            q: query,
            format: "json",
            addressdetails: 1,
            limit: 5,
            namedetails: 1
        });

        const url = `${baseUrl}${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Location search API error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log(data);
        const formattedData = data.map(element => ({
            name: element.display_name,
            latitude: parseFloat(element.lat),
            longitude: parseFloat(element.lon),
        }));
        // console.log(formattedData);
        return formattedData;

    } catch (error) {
        throw new Error(`Failed to search locations: ${error.message}`);
    }
};


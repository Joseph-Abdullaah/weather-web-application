// Components/WeatherContent/WeatherContent.jsx
import { useWeather } from "../contexts/WeatherContext";
import CurrentWeather from "../Components/CurrentWeather/CurrentWeather";
import WeatherDetails from "../Components/WeatherDetails/WeatherDetails";
import DailyForecast from "../Components/DailyForecast/DailyForecast";
import HourlyForecast from "../Components/HourlyForecast/HourlyForecast";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import LoadingSkeleton from "../Components/LoadingSkeleton/LoadingSkeleton";
import NoResults from "../Components/NoResults/NoResults";

const WeatherContent = () => {
  const { loading, error, weatherData, searchResults, searching } =
    useWeather();

  // No Results State - shows within the main content area
  if (
    searchResults.length === 0 &&
    searching === false &&
    error?.type === "search"
  ) {
    return <NoResults />;
  }

  // Loading State - shows skeleton but keeps layout
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Success State - shows actual weather data
  if (weatherData) {
    return (
      <div className="weatherInfo">
        <div className="WeatherGroup1">
          <div className="currentWeather-and-WeatherDetails">
            <CurrentWeather />
            <WeatherDetails name="Feels Like" value="64°" />
            {/* <div className='weatherDetailsContainer'>
              <WeatherDetails name='Feels Like' value='64°'/>
              <WeatherDetails name='Humidity' value='46%'/>
              <WeatherDetails name='Wind' value='9 mph'/>
              <WeatherDetails name='Precipitation' value='0 in'/>
            </div> */}
          </div>
          <DailyForecast />
        </div>
        <div className="weatherGroup2">
          <HourlyForecast />
        </div>
      </div>
    );
  }

  // Fallback (should never reach here in normal flow)
  return null;
};

export default WeatherContent;

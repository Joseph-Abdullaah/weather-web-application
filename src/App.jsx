import React from 'react'
import Header from './Components/Header/Header'
import Title from './Components/Title/Title'
import SearchBar from './Components/SearchBar/SearchBar'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import WeatherDetails from './Components/WeatherDetails/WeatherDetails'
import DailyForecast from './Components/DailyForecast/DailyForecast'
import HourlyForecast from './Components/HourlyForecast/HourlyForecast'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import LoadingSkeleton from './Components/LoadingSkeleton/LoadingSkeleton'
import './App.css'


function App() {
  return (
    <div className='main-container'>
      <Header />
      {/* <ErrorMessage /> */}
      <Title />
      <main className="mainContent">
        <SearchBar />
        {/* <LoadingSkeleton /> */}
        <div className="weatherInfo">
          <div className='WeatherGroup1'>
            <div className='currentWeather-and-WeatherDetails'>
              <CurrentWeather />
              <div className='weatherDetailsContainer'>
                <WeatherDetails name='Feels Like' value='64°'/>
                <WeatherDetails name='Humidity' value='46%'/>
                <WeatherDetails name='Wind' value='9 mph'/>
                <WeatherDetails name='Parecipation' value='0 in'/>
              </div>
            </div>
            <DailyForecast />
          </div>
          <div className='weatherGroup2'>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
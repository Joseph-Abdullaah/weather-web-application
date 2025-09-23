import React from 'react'
import { WeatherProvider, useWeather } from './contexts/WeatherContext'
import Header from './Components/Header/Header'
import Title from './Components/Title/Title'
import SearchBar from './Components/SearchBar/SearchBar'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage'
import './App.css'
import WeatherContent from './content/weatherContent'



function AppLayout() {
  const {error} = useWeather()

  // API Error State - Complete layout change
  if (error && error.type === 'api') {
    return (
      <div className='main-container'>
        <Header />
        {/* Notice: NO Title, NO SearchBar */}
        <main className="mainContent">
          <ErrorMessage />
        </main>
      </div>
    )
  }

  // Normal State - Show everything
  return (
    <div className='main-container'>
      <Header />
      <Title />
      <main className="mainContent">
        <SearchBar />
        <WeatherContent /> {/* This handles loading/success/search errors */}
      </main>
    </div>
  )
}
 

function App() {
  return (
    <WeatherProvider>
      <AppLayout />
    </WeatherProvider>
  )
}

export default App
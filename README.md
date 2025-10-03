# Weather Now 🌤️

A modern, responsive weather application built with React that provides accurate weather forecasts with a beautiful user interface.

## 🌟 Features

- **Current Weather Display** - Real-time temperature, conditions, and weather details
- **Advanced Forecasting** - Hourly and 7-day weather predictions
- **Smart Location Detection** - Automatic geolocation with manual search fallback
- **Intelligent Search** - Type-ahead location search with dropdown results
- **Unit Flexibility** - Switch between Metric (°C, km/h) and Imperial (°F, mph) units
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Error Handling** - Graceful handling of API errors and empty states
- **Loading States** - Professional skeleton screens during data loading

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with JSX
- **State Management**: React Context API
- **Styling**: CSS Modules with design tokens
- **API Integration**: 
  - Open-Meteo for weather data
  - Open-Meteo Geocoding API for location search
  - Nominatim Reverse geocoding API for location search
- **Development Tools**: 
  - Vite for build tooling
  - ESLint for code quality
- **Performance**: Debounced search, optimized re-renders

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/              # App header with unit toggle
│   ├── Title/               # Main title component
│   ├── SearchBar/           # Location search with dropdown
│   ├── CurrentWeather/      # Current conditions display
│   ├── WeatherDetails/      # Weather metrics (feels like, humidity, etc.)
│   ├── HourlyForecast/      # 24-hour weather timeline
│   ├── DailyForecast/       # 7-day weather forecast
│   ├── LoadingSkeleton/     # Loading state components
│   ├── ErrorMessage/        # Error state handling
│   └── NoResults/           # Empty search results state
├── contexts/
│   ├── WeatherContext.jsx   # Global weather state management
│   └── UnitContext.jsx      # Unit preference management
├── services/
│   └── weatherAPI.js        # API integration layer
├── hooks/
│   └── useDebounce.js       # Search debouncing utility
├── utils/
│   └── helpers.js           # Weather icon mapping and formatting
└── App.jsx                  # Main application component
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔌 API Integration

### Weather Data - Open-Meteo
- **Base URL**: `https://api.open-meteo.com/v1/forecast`
- **Data Points**: Current weather, hourly forecast, daily forecast
- **Parameters**: Temperature, humidity, wind speed, precipitation, weather codes
- **Unit Support**: Automatic metric/imperial conversion

### Geocoding - Open-Meteo Search
- **Base URL**: `https://geocoding-api.open-meteo.com/v1/search`
- **Features**: Location search, reverse geocoding
- **Results**: City names with coordinates

### Data Flow
```
User Input → Geocoding API → Coordinates → Weather API → UI Update
```

## 🏗 Component Architecture

### Key Components

#### WeatherContext
- Manages global weather state
- Handles API calls and error states
- Provides geolocation functionality
- Syncs unit preferences with API calls

#### UnitContext  
- Manages temperature, wind speed, and precipitation units
- Provides toggle between metric and imperial systems
- Persists user preferences in localStorage

#### SearchBar
- Debounced search input (300ms)
- Dropdown results with click selection
- Geolocation button for current location
- Loading states during search

## 🎨 Styling Approach

- **CSS Modules** for component-scoped styles
- **Design Tokens** for consistent spacing, colors, and typography
- **Responsive Grid** for adaptive layouts
- **Mobile-First** approach with progressive enhancement

### Design System
- **Colors**: Semantic weather-themed palette
- **Typography**: Hierarchical text presets
- **Spacing**: Consistent 8px grid system
- **Icons**: Custom SVG weather icons

## 🔄 User Interface States

### Loading States
- **Initial Load**: Skeleton screens while fetching location and weather data
- **Search**: "Search in progress" indicator during location lookup
- **Geolocation**: Permission request handling with loading states

### Error States
- **API Errors**: Connection issues with retry functionality
- **Location Errors**: Permission denied or unavailable geolocation
- **Search Errors**: No results found with helpful messaging

### Success States
- **Weather Display**: Complete weather information with icons
- **Search Results**: Dropdown with selectable locations
- **Unit Changes**: Instant unit conversion with API refetch

## ⚡ Performance Optimizations

- **Debounced Search**: Prevents excessive API calls during typing
- **Efficient Re-renders**: Context-based state updates minimize component re-renders
- **Cached Locations**: localStorage persistence for returning users
- **Optimized API Calls**: Batched weather data requests

## 🌐 Browser Compatibility

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Geolocation API**: Required for automatic location detection
- **Responsive Design**: Mobile, tablet, and desktop support
- **JavaScript ES6+**: Modern JavaScript features required

## 📱 Responsive Behavior

- **Mobile (< 768px)**: Stacked layout with vertical scrolling
- **Tablet (768px - 1024px)**: Hybrid layout with adaptive grids
- **Desktop (> 1024px)**: Multi-column layout with horizontal forecasts

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect repository for automatic deployments
- **Static Hosting**: Any service supporting static sites

### Environment Configuration
No environment variables required - uses public APIs with no authentication.

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use descriptive component and variable names
- Follow React best practices and hooks rules
- Maintain consistent styling with CSS Modules
- Write meaningful commit messages

## 🛠 Troubleshooting

### Common Issues

**Geolocation Not Working**
- Ensure HTTPS in production
- Check browser permissions
- Verify location services are enabled

**API Errors**
- Check network connectivity
- Verify API endpoint availability
- Review browser console for error details

**Build Issues**
- Clear node_modules and reinstall dependencies
- Ensure Node.js version compatibility
- Check for syntax errors in components

### Debugging Tips
- Use browser DevTools for network monitoring
- Check React DevTools for component state
- Review console for API response details

## 🔮 Future Enhancements

### Planned Features
- [ ] Weather maps integration
- [ ] Severe weather alerts
- [ ] Historical weather data
- [ ] Favorite locations
- [ ] Weather trends and analytics
- [ ] Push notifications for weather changes
- [ ] Social sharing of weather conditions
- [ ] Air quality index display

### Technical Improvements
- [ ] Service Worker for offline functionality
- [ ] PWA installation support
- [ ] Advanced caching strategies
- [ ] Performance monitoring
- [ ] Automated testing suite

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Open-Meteo** for providing free weather API services
- **React Team** for the amazing framework
- **Weather Icons** for the comprehensive icon set
- **Contributors** who help improve this application

---

**Weather Now** - Bringing you accurate weather information with a beautiful, intuitive interface. Stay informed, stay prepared! 🌈
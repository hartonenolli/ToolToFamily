import { useWeather } from '../hooks/useWeather'
import { clothingSuggestion } from '../utils/Clothing'

export const Weather = ({ city }) => {
  const weatherData = useWeather(city)

  if (!weatherData) {
    return <div>Loading weather data...</div>
  }

  return (
    <div>
      <h3>Weather Forecast for Today in {city}</h3>
      <p>
        {clothingSuggestion({
          temperature: weatherData.current.temp_c,
          condition: weatherData.current.condition.text,
          wind_speed: weatherData.current.wind_kph,
          precipitation: weatherData.current.precip_mm > 0,
        })}
      </p>
      <ul>
        <li>Temperature: {weatherData.current.temp_c} °C</li>
        <li>Condition: {weatherData.current.condition.text}</li>
        <li>Humidity: {weatherData.current.humidity} %</li>
        <li>Wind: {weatherData.current.wind_kph} kph</li>
        <li>
          <img src={weatherData.current.condition.icon} alt="Weather icon" />
        </li>
      </ul>
    </div>
  )
}

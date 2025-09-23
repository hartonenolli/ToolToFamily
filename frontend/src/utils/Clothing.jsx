export function clothingSuggestion(weatherData) {
  console.log(
    'Generating clothing suggestion based on weather data:',
    weatherData
  )

  const temp = weatherData?.temperature ?? 20
  const condition = weatherData?.condition?.toLowerCase?.() ?? ''
  const wind = weatherData?.wind_speed ?? 0
  const precipitation = weatherData?.precipitation ?? false

  const suggestion = ['Based on the current weather conditions:']

  // Temperature-based suggestions
  if (temp < 0) {
    suggestion.push('Wear a heavy winter coat, hat, gloves, and scarf.')
  } else if (temp < 10) {
    suggestion.push('Wear a warm jacket or coat.')
  } else if (temp < 20) {
    suggestion.push('Wear a light jacket or sweater.')
  } else if (temp < 25) {
    suggestion.push('A t-shirt and jeans should be comfortable.')
  } else {
    suggestion.push('Wear shorts and a t-shirt.')
  }

  // Precipitation
  if (
    precipitation ||
    condition.includes('rain') ||
    condition.includes('shower')
  ) {
    suggestion.push('Bring an umbrella or raincoat.')
  }

  // Wind
  if (wind > 30) {
    suggestion.push("It's windy, consider a windbreaker.")
  }

  // Sun
  if (condition.includes('sun') || condition.includes('clear')) {
    suggestion.push('Consider sunglasses and sunscreen.')
  }

  return suggestion.join(' ')
}

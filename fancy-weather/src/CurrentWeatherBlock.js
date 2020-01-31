import { user } from './UserData';
import WeatherIcon from './WeatherIcon';
import clock from './clock';

export default class CurrentWeatherBlock {
  constructor(weather) {
    this.weather = weather;
    this.currentWeatherBlock = document.createElement('div');
    this.currentCityBlock = document.createElement('div'); // container for city and date
    this.currentWeatherTempBlock = document.createElement('div'); // container for temp and icon
    this.currentWeatherBlockComplex = document.createElement('div'); // container for complex weather data
    this.currentCity = document.createElement('p');
    this.currentDate = document.createElement('p');
    this.currentWeather = document.createElement('p');
    // Create block
    this.currentWeatherBlock.setAttribute('class', 'current-weather-block');
    document.body.appendChild(this.currentWeatherBlock);
    this.currentWeatherBlock.appendChild(this.currentCityBlock);
    this.currentCityBlock.setAttribute('class', 'current-weather-block_city');
    this.currentWeatherBlock.appendChild(this.currentWeatherTempBlock);
    this.currentWeatherTempBlock.setAttribute('class', 'current-weather-block_temp');
    this.currentWeatherBlock.appendChild(this.currentWeatherBlockComplex);
    this.currentWeatherBlockComplex.setAttribute('class', 'current-weather-block_complex-data');
    // Write current city name
    this.currentCity.setAttribute('class', 'current-city');
    this.currentCity.innerHTML = `${user.city}, ${user.country}`;
    this.currentCityBlock.appendChild(this.currentCity);
    // Write current date
    this.currentDate.setAttribute('class', 'current-date');
    this.currentCityBlock.appendChild(this.currentDate);
    // Write current weather
    this.currentWeather.setAttribute('class', 'current-weather');
    this.currentWeather.innerHTML = `${Math.ceil(this.weather.currently.temperature)} &degС`;
    this.currentWeatherTempBlock.appendChild(this.currentWeather);
    // add icon
    const currentWeatherIcon = new WeatherIcon(this.currentWeatherTempBlock, this.weather.currently.icon);
    // add complex data
    this.currentWeatherBlockComplex.insertAdjacentHTML('afterbegin', `
      <p class="current-weather-block_complex-data_str summary">${this.weather.currently.summary}</p>
      <p class="current-weather-block_complex-data_str apparent">Feels like: ${Math.ceil(this.weather.currently.apparentTemperature)} &degС</p>
      <p class="current-weather-block_complex-data_str windSpeed">Wind speed: ${this.weather.currently.windSpeed} m/s</p>
      <p class="current-weather-block_complex-data_str humidity">Humidity: ${this.weather.currently.humidity * 100}%</p>
    `);
  }

  refreshTime() {
    const time = clock();
    document.querySelector('.current-date').innerHTML = time;
    setInterval(this.refreshTime, 1000);
  }

  changeUnitsToFahrenheit() {
    this.currentWeather.innerHTML = `${Math.ceil(this.weather.currently.temperature * 1.8 + 32)} &degF`;
    document.querySelector('.apparent').innerHTML = `Feels like: ${Math.ceil(this.weather.currently.apparentTemperature * 1.8 + 32)} &degF`;
  }

  changeUnitsToCelsius() {
    this.currentWeather.innerHTML = `${Math.ceil(this.weather.currently.temperature)} &degС`;
    document.querySelector('.apparent').innerHTML = `Feels like: ${Math.ceil(this.weather.currently.apparentTemperature)} &degС`;
  }

  refreshCurrentWeather(weather) {
    this.weather = weather;
    this.currentWeather.innerHTML = `${Math.ceil(this.weather.currently.temperature)} &degС`;
    this.currentCity.innerHTML = `${user.city}, ${user.country}`;
    document.querySelector('.summary').innerHTML = `${this.weather.currently.summary}`;
    document.querySelector('.apparent').innerHTML = `Feels like: ${Math.ceil(this.weather.currently.apparentTemperature)} &degС`;
    document.querySelector('.windSpeed').innerHTML = `Wind speed: ${this.weather.currently.windSpeed} m/s`;
    document.querySelector('.humidity').innerHTML = `Humidity: ${this.weather.currently.humidity * 100}%`;
  }
}

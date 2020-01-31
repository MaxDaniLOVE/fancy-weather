import WeatherIcon from './WeatherIcon';
import { user } from './UserData';

export default class DailyWeatherBlock {
  constructor() {
    this.weather = user.weather;
    this.dailyWeatherBlock = document.createElement('div');
    // Create block
    this.dailyWeatherBlock.setAttribute('class', 'daily-weather-block');
    document.body.appendChild(this.dailyWeatherBlock);
    this.day = user.day;
    this.daysMatrix = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  addNewDate(weatherData, days) {
    // create new div inside dailyWeatherBlock
    this.dailyWeatherData = document.createElement('div');
    this.dailyWeatherData.setAttribute('class', 'daily-weather-block_data');
    this.dailyWeatherBlock.appendChild(this.dailyWeatherData);
    // create new string inside dailyWeatherData
    this.dailyWeatherDay = document.createElement('p');
    this.dailyWeatherDay.setAttribute('class', 'daily-weather-block_data__day');
    this.nextDay = this.day + days;
    if (this.nextDay > 6) {
      this.nextDay = this.day + days - 7;
    }
    this.dailyWeatherDay.innerHTML = `${this.daysMatrix[this.nextDay]}`;
    this.dailyWeatherData.appendChild(this.dailyWeatherDay);
    // create new string inside dailyWeatherData
    this.dailyWeatherTemp = document.createElement('p');
    this.dailyWeatherTemp.setAttribute('class', 'daily-weather-block_data__temp');
    this.dailyWeatherTemp.innerHTML = `${Math.round(weatherData.temperatureMax)} &degС / ${Math.round(weatherData.temperatureMin)} &degС`;
    this.dailyWeatherData.appendChild(this.dailyWeatherTemp);
    // add icon
    const dailytWeatherIcon = new WeatherIcon(this.dailyWeatherData, weatherData.icon);
  }

  switchUnitsToFahrenheit() {
    const dailyWeather = document.querySelectorAll('.daily-weather-block_data__temp');
    this.weatherData = user.weather.daily.data;
    let days = 1;
    dailyWeather.forEach((block) => {
      block.innerHTML = `${Math.round(this.weatherData[days].temperatureMax * 1.8 + 32)} &degF / ${Math.round(this.weatherData[days].temperatureMin * 1.8 + 32)} &degF`;
      days += 1;
    });
  }

  switchUnitsToCelsius() {
    const dailyWeather = document.querySelectorAll('.daily-weather-block_data__temp');
    this.weatherData = user.weather.daily.data;
    let days = 1;
    dailyWeather.forEach((block) => {
      block.innerHTML = `${Math.round(this.weatherData[days].temperatureMax)} &degС / ${Math.round(this.weatherData[days].temperatureMin)} &degС`;
      days += 1;
    });
  }

  refreshCurrentWeather() {
    const dailyWeather = document.querySelectorAll('.daily-weather-block_data__temp');
    this.temperature = user.weather.daily;
    let days = 1;
    dailyWeather.forEach((block) => {
      block.innerHTML = `${Math.round(this.temperature.data[days].temperatureMax)} &degС / ${Math.round(this.temperature.data[days].temperatureMin)} &degС`;
      days += 1;
    });
    days = 1;
    this.day = user.day;
    const allDays = document.querySelectorAll('.daily-weather-block_data__day');
    allDays.forEach((day) => {
      this.nextDay = this.day + days;
      if (this.nextDay > 6) {
        this.nextDay = this.day + days - 7;
      }
      day.innerHTML = `${this.daysMatrix[this.nextDay]}`;
      days += 1;
    });
  }
}

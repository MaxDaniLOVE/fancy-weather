import { user } from './UserData';
import Background from './Background';
import getCity from './getCity';
import getLinkToImage from './getLinkToImage';
import getWeatherData from './getWeatherData';
import CurrentWeatherBlock from './CurrentWeatherBlock';
import DailyWeatherBlock from './DailyWeatherBlock';
import Map from './getMap';
import Navigation from './Navigation';
import voiceRecognize from './voiceRecognize';
import getLocation from './getLocation';
import WeatherIcon from './WeatherIcon';
import clock from './clock';
import saveTemperature from './saveTemperature';
import Alert from './Alert';

async function build() {
  await getCity(); // get's current placement of user
  await getLocation(); // get's current country
  await getWeatherData(); // get's data for weather forecast
  clock(); // create current date only once
  await getLinkToImage(); // get's link to background image according to current season, time of day
  const background = new Background(user.background); // creates background of page
  const navigation = new Navigation(); // creates nav-bar
  // creates block with current weather
  const currentWeatherBlock = new CurrentWeatherBlock(user.weather);
  currentWeatherBlock.refreshTime(); // add working clocks
  const dailyWeatherBlock = new DailyWeatherBlock(); // creates wrapper for daily forecast
  // add 3 blocks for daily forecast
  for (let i = 1; i < 4; i += 1) {
    dailyWeatherBlock.addNewDate(user.weather.daily.data[i], i);
  }
  // creates wrapper for map
  const newMap = new Map(user.longitude, user.latitude);
  // draw map
  newMap.drawMap(user.longitude, user.latitude);
  document.querySelector('.refresh-btn').addEventListener('click', () => {
    background.refreshBackground();
  });
  // switcher for temp units
  document.querySelectorAll('.temp-tumbler').forEach((tumb) => {
    tumb.addEventListener('click', () => {
      if (tumb.classList.contains('temp-celsius')) {
        currentWeatherBlock.changeUnitsToCelsius(); // refresh current forecast
        dailyWeatherBlock.switchUnitsToCelsius(); // refresh daily forecast
        saveTemperature('cel'); // save units to localStorage
      }
      if (tumb.classList.contains('temp-fahrenheit')) {
        currentWeatherBlock.changeUnitsToFahrenheit(); // refresh current forecast
        dailyWeatherBlock.switchUnitsToFahrenheit(); // refresh daily forecast
        saveTemperature('fahr'); // save units to localStorage
      }
    });
  });
  // take temp units from local storage and add activation on button
  function setUnits() {
    switch (localStorage.activeTemp) {
      case 'cel':
        currentWeatherBlock.changeUnitsToCelsius(); // refresh current forecast
        dailyWeatherBlock.switchUnitsToCelsius(); // refresh daily forecast
        document.querySelector('.temp-celsius').classList.add('active');
        document.querySelector('.temp-fahrenheit').classList.remove('active');
        break;
      case 'fahr':
        currentWeatherBlock.changeUnitsToFahrenheit();// refresh current forecast
        dailyWeatherBlock.switchUnitsToFahrenheit();// refresh daily forecast
        document.querySelector('.temp-fahrenheit').classList.add('active');
        document.querySelector('.temp-celsius').classList.remove('active');
        break;
      default:
        return null;
    }
    return null;
  }
  // set temp units at current place
  setUnits();

  async function searchWeather() {
    user.city = document.querySelector('.search-input').value;
    await getLocation();
    await getWeatherData();
    clock();
    console.log(user);
    
    background.refreshBackground();
    currentWeatherBlock.refreshCurrentWeather(user.weather);
    dailyWeatherBlock.refreshCurrentWeather();
    setUnits(); // set temp units at searched place
    newMap.drawMap(user.longitude, user.latitude);
    newMap.refreshLatLng(user.longitude, user.latitude);
    // delete previous icons
    document.querySelectorAll('.weather-icon').forEach((icon) => {
      icon.remove();
    });
    // new icon for current weather
    const currentWeatherBlockTemp = document.querySelector('.current-weather-block_temp');
    const newIcon = user.weather.currently.icon;
    const refreshedCurrentWeatherIcon = new WeatherIcon(currentWeatherBlockTemp, newIcon);
    // new icon for daily weather
    let i = 1;
    document.querySelectorAll('.daily-weather-block_data').forEach((block) => {
      const { icon } = user.weather.daily.data[i];
      const refreshedIcon = new WeatherIcon(block, icon);
      i += 1;
    });
  }

  document.querySelector('.voice-btn').addEventListener('click', () => {
    voiceRecognize();
    setTimeout(() => {
      const searchInput = document.querySelector('.search-input').value;
      if (!searchInput.length) {
        const message = 'Please speak louder!';
        const voiceAlert = new Alert(message);
      } else {
        searchWeather();
      }
    }, 5000);
  });

  document.querySelector('.search-btn').addEventListener('click', searchWeather);

  document.querySelector('.search-input').addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
      searchWeather();
    }
  });

  document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('en-lang')) {
        const message = 'Translation feature will be added soon';
        const langAlert = new Alert(message);
      }
    });
  });
}

build();

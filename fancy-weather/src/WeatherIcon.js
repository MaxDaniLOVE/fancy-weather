export default class WeatherIcon {
  constructor(block, icon) {
    switch (icon) {
      case 'clear-day':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-sun weather-icon"></i>');
        break;
      case 'clear-night':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-moon weather-icon"></i>');
        break;
      case 'partly-cloudy-day':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-cloud-sun weather-icon"></i>');
        break;
      case 'partly-cloudy-night':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-cloud-moon weather-icon"></i>');
        break;
      case 'cloudy':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-cloud weather-icon"></i>');
        break;
      case 'rain':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-cloud-showers-heavy weather-icon"></i>');
        break;
      case 'sleet':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-cloud-meatball weather-icon"></i>');
        break;
      case 'snow':
        block.insertAdjacentHTML('beforeend', '<i class="far fa-snowflake weather-icon"></i>');
        break;
      case 'wind':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-wind weather-icon"></i>');
        break;
      case 'fog':
        block.insertAdjacentHTML('beforeend', '<i class="fas fa-smog weather-icon"></i>');
        break;
      default:
        break;
    }
  }
}

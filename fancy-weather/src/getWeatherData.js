import { user } from './UserData';
import Alert from './Alert';

export default async function getWeatherData() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const lat = user.latitude;
  const lng = user.longitude;
  const location = `${lat},${lng}`;
  const url = `https://api.darksky.net/forecast/d8563055b51df9f6d5d4e5e6093857fb/${location}?units=si`;
  return fetch(proxyUrl + url)
    .then((res) => res.json())
    .then((data) => {
      user.weather = data;
      return data;
    })
    .catch(() => {
      const message = 'Sorry, but you\'ve made too many requests';
      const getCityAlert = new Alert(message);
    });
}

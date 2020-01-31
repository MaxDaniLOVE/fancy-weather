import { user } from './UserData';
import Preloader from './Preloader';
import Alert from './Alert';

export default function getLocation() {
  const { city } = user;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=c6b6da0f80f24b299e08ee1075f81aa5&pretty=1&language=en-US`;
  const preloader = new Preloader('location');
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      user.GMTdifference = data.results[0].annotations.timezone.offset_sec * 1000;
      user.latitude = data.results[0].geometry.lat.toFixed(4);
      user.longitude = data.results[0].geometry.lng.toFixed(4);
      user.country = data.results[0].components.country;
      preloader.removePreloader();
      return data;
    })
    .catch(() => {
      const message = 'Oops! Something went wrong!';
      const getCityAlert = new Alert(message);
    });
}

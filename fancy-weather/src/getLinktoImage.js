import { user } from './UserData';
import Preloader from './Preloader';
import Alert from './Alert';

export default function getLinkToImage() {
  const { season } = user;
  const { timeOfDay } = user; // remove because of inappropriate photos
  let { summary } = user.weather.currently;
  summary = summary.split(' ').join('_').toLowerCase();
  const { country } = user;
  const { city } = user;
  const query = `query=${summary},${season},${timeOfDay},${city},${country}`;
  const token = 'client_id=ee22bffa642d544ceadcdd614c02e1fecb709345dc4bbee0be667788c7555c5b';
  const url = `https://api.unsplash.com/photos/random?${query}&${token}`;
  const preloader = new Preloader('image');
  return fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('savedLink', data.urls.small)
      user.background = data.urls.small;
      preloader.removePreloader();
    })
    .catch(() => {
      preloader.removePreloader();
      user.background = localStorage.savedLink;
      const message = 'Sorry but we have to load previously saved image';
      const newAlert = new Alert(message);
    });
}

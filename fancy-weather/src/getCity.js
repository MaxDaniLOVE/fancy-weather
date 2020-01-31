import { user } from './UserData';
import Alert from './Alert';

export default async function getCity() {
  const url = 'https://ipinfo.io/json?token=86d5efd448469d';
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      user.city = data.city;
      return data;
    })
    .catch(() => {
      const message = 'Oops! Something went wrong!';
      const getCityAlert = new Alert(message);
    });
}

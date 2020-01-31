import { user } from './UserData';

export default function clock() {
  const date = new Date().getTime();
  const offset = new Date().getTimezoneOffset();
  const utcDate = date + offset * 60000;
  const currentDate = new Date(utcDate + user.GMTdifference);
  const day = currentDate.getDay();
  user.day = day;
  const month = currentDate.getMonth();
  let hours = currentDate.getHours();
  user.changeDate(month, hours);
  let minutes = currentDate.getMinutes();
  if (hours / 10 < 1) {
    hours = `0${hours}`;
  }
  if (minutes / 10 < 1) {
    minutes = `0${minutes}`;
  }
  const daysMatrix = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsMatrix = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const time = `${daysMatrix[day]} ${currentDate.getDate()} ${monthsMatrix[month]} ${hours}:${minutes}`;
  return time;
}

if (!localStorage.activeTemp) {
  localStorage.setItem('activeTemp', 'cel');
}

export default function saveTemperature(temp) {
  switch (temp) {
    case 'cel':
      localStorage.setItem('activeTemp', 'cel');
      break;
    case 'fahr':
      localStorage.setItem('activeTemp', 'fahr');
      break;
    default:
      return null;
  }
  return null;
}

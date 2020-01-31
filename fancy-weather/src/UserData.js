export default class UserData {
  changeDate(month, hours) {
    if ((month >= 0 && month <= 1) || month === 11) {
      this.season = 'winter';
    } else if (month >= 2 && month <= 4) {
      this.season = 'spring';
    } else if (month >= 5 && month <= 7) {
      this.season = 'summer';
    } else if (month >= 8 && month <= 10) {
      this.season = 'autumn';
    }
    if (hours >= 0 && hours <= 5) {
      this.timeOfDay = 'night';
    } else if (hours >= 6 && hours <= 11) {
      this.timeOfDay = 'morning';
    } else if (hours >= 12 && hours <= 17) {
      this.timeOfDay = 'noon';
    } else if (hours >= 18 && hours <= 23) {
      this.timeOfDay = 'evening';
    }
  }
}

export const user = new UserData();

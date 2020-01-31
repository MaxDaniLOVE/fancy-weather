import { user } from './UserData';
import getLinkToImage from './getLinktoImage';

export default class Background {
  constructor(image) {
    this.background = document.createElement('div');
    this.background.setAttribute('class', 'background');
    this.setBackgroundStyles(image);
    document.body.appendChild(this.background);
    const darkenBg = document.createElement('div');
    darkenBg.setAttribute('class', 'background-darken');
    document.body.appendChild(darkenBg);
  }

  async refreshBackground() {
    await getLinkToImage();
    this.newImg = user.background;
    this.setBackgroundStyles(this.newImg);
  }

  setBackgroundStyles(image) {
    this.background.style.width = '100%';
    this.background.style.height = '100vh';
    this.background.style.background = `url("${image}") no-repeat`;
    this.background.style.backgroundPosition = 'center';
    this.background.style.backgroundSize = 'cover';
  }
}

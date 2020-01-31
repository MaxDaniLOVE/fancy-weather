export default class Preloader {
  constructor(message) {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="preloader-container">
        <h3 class="preloader-span">Load ${message}...</h3>
        <span class="loader"></span>
      </div>
    `);
  }

  removePreloader() {
    document.querySelector('.preloader-container').remove();
  }
}

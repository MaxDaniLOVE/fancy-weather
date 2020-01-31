export default class Navigation {
  constructor() {
    this.navbar = `
    <nav class="navigation">
      <div class="btns-wrapper">
      <button type="button" class="btn btn-secondary refresh-btn"><i class="fas fa-sync-alt"></i></button>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Language
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item en-lang" href="#">English</a>
            <a class="dropdown-item bel-lang" href="#">Belarusian</a>
            <a class="dropdown-item rus-lang" href="#">Russian</a>
          </div>
          </div>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active temp-tumbler temp-celsius">
            <input type="radio" name="options" id="option1" autocomplete="off" checked> &degC
          </label>
          <label class="btn btn-secondary temp-tumbler temp-fahrenheit">
            <input type="radio" name="options" id="option2" autocomplete="off"> &degF
          </label>
        </div>
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control search-input" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
          <span class="voice-btn">
            <i class="fas fa-microphone"></i>
          </span>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary search-btn" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
          </div>
        </div>
    </nav>`;
    const background = document.querySelector('.background-darken');
    background.insertAdjacentHTML('afterend', this.navbar);
  }
}

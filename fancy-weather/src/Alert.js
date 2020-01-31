export default class Alert {
  constructor(message) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="alert alert-danger" role="alert">
        ${message}
      </div>
    `);
  }
}

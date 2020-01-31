export default class Map {
  constructor(long, lat) {
    this.long = long;
    this.lat = lat;
    document.body.insertAdjacentHTML('beforeend', `
    <div class="map-wrapper">
      <div id='map' style='width: 400px; height: 300px;'></div>
      <div class='coordinates-container'>
        <p class="coordinates longitude"></p>
        <p class="coordinates latitude"></p>
      </div>
    </div>
  `);
    this.refreshLatLng(long, lat);
  }

  drawMap(long, lat) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYWJpdmUxNDRsM21xdDJ4OGQ0cnp3In0.ZUQD9jZOgJDQDBfIOC_r7A';
    let map = new mapboxgl.Map( {
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom: 9
    });
  }

  refreshLatLng(long, lat) {
    this.long = `${(+long).toFixed(2)}`;
    this.lat = `${(+lat).toFixed(2)}`;
    this.longDeg = `${Math.trunc(this.long)}&deg`;
    this.longMin = `${Math.trunc(Math.abs(Math.trunc(this.long) - this.long).toFixed(2) * 100)}\'`;
    this.latDeg = `${Math.trunc(this.lat)}&deg`;
    this.latMin = `${Math.trunc(Math.abs(Math.trunc(this.lat) - this.lat).toFixed(2) * 100)}\'`;
    if (this.latMin.length === 2) {
      this.latMin = `0${this.latMin}`;
    }
    if (this.longMin.length === 2) {
      this.longMin = `0${this.longMin}`;
    }
    const longitudeStr = document.querySelector('.longitude');
    const latitudeStr = document.querySelector('.latitude');
    longitudeStr.innerHTML = `Longitude: ${this.longDeg} ${this.longMin}`;
    latitudeStr.innerHTML = `Latitude: ${this.latDeg} ${this.latMin}`;
  }
}

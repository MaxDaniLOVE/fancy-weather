const path = require('path');

module.exports = {
  entry: './fancy-weather/src/app.js',
  output: {
    path: path.resolve('./fancy-weather/dist'),
    filename: 'main.js',
  },
  mode: 'production',
  watch: true,
};

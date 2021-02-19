const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'static', 'build'),
    filename: "bundle.js",
    publicPath: "/static/build/",
  }
}

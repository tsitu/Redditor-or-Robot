const webpack = require('webpack');
const path = require('path');

const APP_SRC = path.resolve(__dirname, 'src');
const APP_BUILD = path.resolve(__dirname, 'build');
const APP_HOST = 'localhost';

const config = {
  entry: `${APP_SRC}/index.jsx`,
  output: {
    path: APP_BUILD,
    filename: 'code.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [{
      include: APP_SRC,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: APP_HOST,
    port: 8080,
  },
};

module.exports = config;

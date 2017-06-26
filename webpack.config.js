import webpack from 'webpack';
import path from 'path';

const APP_SRC = path.resolve(__dirname, 'src');
const APP_PUBLIC = path.resolve(__dirname, 'public');

const config = {
  entry: `${APP_SRC}/index.jsx`,
  output: {
    path: APP_PUBLIC,
    filename: 'code.js',
    publicPath: '/public/',
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
    // Dynamic IP: below will update occasionally
    host: '192.168.0.111',
    port: 8080,
  },
};

module.exports = config;

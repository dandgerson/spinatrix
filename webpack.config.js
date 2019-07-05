const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src',
  },

  output: {
    path: __dirname,
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },

        },
      },
    ],
  },
};

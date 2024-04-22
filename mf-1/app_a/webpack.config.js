const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'app1Entry.js',
      remotes: {
        app2: 'app2@http://localhost:3001/app2Entry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
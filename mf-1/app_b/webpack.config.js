const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
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
      name: 'app_b',
      library: {
        type: 'var',
        name: 'app_b',
      },
      exposes: {
        './Button': './src/components/Button',
      },
      shared: {
        ...deps,
        react: {
          eager: true,
        },
        'react-dom': {
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
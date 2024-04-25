const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    // path: './dist' >>   Need abs path
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'https://som-cdn/'
    publicPath: '',
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5* 1024  // 5kb
          }
        }
      }, {
        test: /\.(txt)$/,
        type: 'asset/source',
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }, {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }, {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template: 'src/index.hbs',
      description: 'Yo Yo Yo',
    })
    // new CleanWebpackPlugin()
  ]
  // module: {
  //   rules: [{
  //     test: /\.(png|jpg)$/,
  //     type: 'asset/resource'
  //   }, {
  //     test: /\.(svg)$/,
  //     type: 'asset/inline'
  //   }]
  // }
}
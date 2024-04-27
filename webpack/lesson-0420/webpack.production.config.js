const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'hello': './src/index.js',
    'kiwi': '/src/kiwi.js'
  },
  output: {
    filename: '[name].[contenthash].js',
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
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'hello.html',
      chunks: ['hello'],
      title: 'hello',
      template: 'src/page-template.hbs',
      description: 'hello',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'kiwi',
      template: 'src/page-template.hbs',
      description: 'kiwi',
      minify: false
    }),
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
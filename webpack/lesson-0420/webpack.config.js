const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // path: './dist' >>   Need abs path
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'https://som-cdn/'
    publicPath: 'dist/'
  },
  mode: 'none',
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
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
      }
    ]
  }
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
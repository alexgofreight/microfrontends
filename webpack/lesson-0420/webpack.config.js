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
    rules: [{
      test: /\.(png|jpg)$/,
      type: 'asset/resource'
    }, {
      test: /\.(svg)$/,
      type: 'asset/inline'
    }]
  }
}
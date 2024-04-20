const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'boundle.js',
    // path: './dist' >>   Need abs path
    path: path.resolve(__dirname, './dist')
  },
  mode: 'none'
}
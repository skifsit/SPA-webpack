const path = require('path')

const resultPath = path.resolve(__dirname, 'dist')

console.log('resultPth', resultPath)
console.log('resultFile', resultPath + '/' + 'bundle.js')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: resultPath
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        // use: [ {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[path][name].[ext]'
        //   }
        // }, {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[path][name].[ext]'
        //   }
        // }],
        loader: 'html-loader',
      }
    ]
  }
}
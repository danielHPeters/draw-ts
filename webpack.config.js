'use strict'

const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path')

module.exports = {
  entry: {
    app: './src/app.ts',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './public/js'),
    filename: '[name].min.js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: [
          '/node_modules/',
          '/**/*.spec.ts'
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}

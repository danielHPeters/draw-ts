'use strict'

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
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          '/node_modules/',
          '/**/*.spec.ts'
        ]
      }
    ]
  }
}

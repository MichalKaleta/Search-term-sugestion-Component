const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  entry: [
    "./style/style.css",
    "./src/index.js"
  ],
  
  output: {
    filename: './dist/bundle.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase:  "./"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        include: /style/,
        loaders: ["style-loader","css-loader"]
      }, 
      { 
        test: /\.html$/,
        loader: 'html-loader' 
      }
    ] 

  }
}

/*eslint-disable no-var */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
module.exports = {

  devtool: 'inline-source-map',
  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (fs.statSync(path.join(__dirname, dir)).isDirectory()&&dir.indexOf("_")>0){
        entries[dir] = path.join(__dirname, dir, 'm_index.js')
    }
    return entries
  }, {}),
  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less'},
      { test: /\.(png|jpg|gif)$/, loader: "url-loader?prefix=img/&limit=5000" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?prefix=font/&limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?prefix=font/" }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}

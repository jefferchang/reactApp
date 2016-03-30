/*eslint-disable no-console, no-var */
var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

var app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))

var fs = require('fs')
var path = require('path')
__dirname=__dirname+ '/app'
app.use(express.static(__dirname));


fs.readdirSync(__dirname).forEach(function (file) {
  if (fs.statSync(path.join(__dirname, file)).isDirectory())
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})


app.listen(3005, function () {
  console.log('Server listening on http://localhost:3005, Ctrl+C to stop')
})

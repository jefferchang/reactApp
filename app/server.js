/*eslint-disable no-console, no-var */
var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')
var proxy = require('express-http-proxy')
var url = require('url')
var app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});
app.get("*",function(req, res, next){
  console.log('%s %s', req.method, req.url,"*");
  next();
});
var fs = require('fs')
var path = require('path')

fs.readdirSync(__dirname).forEach(function (file) {
  if (fs.statSync(path.join(__dirname, file)).isDirectory())
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})
app.use(express.static(__dirname))

app.use('/rest', proxy('192.168.1.100', {
  port: 8082,
  filter: function(req,res){
    console.log("进入filter 过虑.....");
    return true;
  },
  forwardPath: function(req, res) {
    console.log("进入forwardPath请求....");
    var fpath = require('url').parse(req.url).path;
    fpath = '/rest'+ fpath;
    console.log('http://localhost:8082' + fpath);
    return fpath;
  },
  intercept: function(rsp, data, req, res, callback) {
    console.log("进入数据 intercept转换....");
    try{
      console.log(data.toString('utf8'));
      data = JSON.parse(data.toString('utf8'));
    }catch (e){
      console.log(e);
    }
    callback(null, JSON.stringify(data));
  }
}));


app.listen(9999, function () {
  console.log('Server listening on http://localhost:9999, Ctrl+C to stop')
})

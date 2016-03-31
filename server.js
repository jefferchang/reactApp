/*eslint-disable no-console, no-var */
var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')
var proxy = require('express-http-proxy')
var url = require('url')

/*
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser')
var proxymid = require('proxy-middleware')*/


var app = express()
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))

var fs = require('fs')
var path = require('path')
__dirname=__dirname+ '/app'
app.use(express.static(__dirname))


fs.readdirSync(__dirname).forEach(function (file) {
  if (fs.statSync(path.join(__dirname, file)).isDirectory())
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})
app.use('/api/*', proxy('www.loveyfl.cn', {
  port: 80,
  filter: function(req,res){
    console.log("进入filter 过虑.....");
    return true;
  },
  forwardPath: function(req, res) {
    console.log("进入forwardPath请求....");
    var fpath = require('url').parse(req.url).path;
    fpath = '/api'+ fpath;
    console.log('http://www.loveyfl.cn' + fpath);
    return fpath;
  },
  intercept: function(rsp, data, req, res, callback) {
    console.log("进入数据 intercept转换....");
    /* console.log(data.toString('utf8'));
    data = JSON.parse(data.toString('utf8'));
    data.proxied = true;
    callback(null, JSON.stringify(data));*/
  },
  error:function(a,b){
    console.log(a);
  }
}));

app.use(function(req, res, next) {
  try{
    var err = {};
    err.status = 404;
  }catch (e){
    console.log("e"+e);
  }
  next(err);
});
app.listen(3005, function () {
  console.log('Server listening on http://localhost:3005, Ctrl+C to stop')
})

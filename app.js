var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var swig = require('swig')
var mongoose = require('mongoose')
var sass = require('node-sass-middleware')
var async = require('async')
var routes = require('./routes')

var app = express()

// require('./filters')(swig)

// view engine setup
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// connecting to routes
app.use('/', routes)
app.use('/bower_components', express.static(__dirname + '/bower_components'))

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into next())
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render('error', { 
    	message: err.message,
    	error: {}
    });
});

module.exports = app;

app.listen(3000)
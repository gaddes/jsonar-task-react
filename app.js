var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var data = require('./routes/data');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views')); // This is the folder where we keep our pug files
app.set('view engine', 'pug');

var mysql = require("mysql");

// Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'zL8YWa4lGEBr',
		database : 'classicmodels'
	});
	res.locals.connection.connect();
	next();
});

// FIXME: delete this?
// app.use(logger('dev'));

// Serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Handle our own routes!
app.use('/', index);
app.use('/data', data);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

var http = require('http');
module.exports = app;
var server = http.createServer(app);
server.listen(4007);
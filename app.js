var createError = require('http-errors');
const cors = require('cors'); 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var baseUrl = '/api.govt.in';

var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var alertRoutes = require('./routes/alerts');

var app = express();
app.use(session({
  secret : 'mySecreteSession',
  resave: true,
  saveUninitialized: true
}
));
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*  DEFAULT ROUTES */
app.get('/', indexRoutes.home);
app.get(baseUrl, indexRoutes.home);
app.get(baseUrl + '/getNotifications', indexRoutes.getNotifications);
/*  END OF DEFAULT ROUTES */

/*  USER ROUTES */
app.get(baseUrl + '/users/list', usersRoutes.userList);
/*  END OF USER ROUTES */

/*  ALERT ROUTES */
app.get(baseUrl + '/sendOTP/:toNumber', alertRoutes.sendOTP);
/*  END OF USER ROUTES */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.env.PORT=3355;
module.exports = app;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var port     = process.env.PORT || 3000;
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


app.use(morgan('dev')); // log every request to the console
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


require('./server/router.js')(app, passport);
app.listen(port);
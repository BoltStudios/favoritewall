
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , app = express();

  GLOBAL.consumerKey = 'lus2i66cmnPgla8zF2q5Q'
  GLOBAL.consumerSecret = '4ZcSL65MtaUKrUu4H0bUKRaF6vADvpEDsykjM68Vs8A'
  GLOBAL.cake = require('bund-cake')(app)

// all environments
app.configure(function () {    
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('twitterspitter'));
	app.use(express.cookieSession({secret: 'yo momma so dumb she'}))
	app.use(passport.initialize());
	app.use(app.router);
	app.use(require('less-middleware')({ src: __dirname + '/public' }));
	app.use(express.static(path.join(__dirname, 'public')));
});

require('./routes')(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

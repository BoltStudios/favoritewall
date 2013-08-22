


var filters = require('./actionFilter');
var favoritesService = require('../services/favoritesService');


module.exports = function(app) {


	require('./twitter')(app)

	app.get('/', function(req, res) {
		res.render('index', {page:'index'})
	})

	app.get('/setup', filters.isLoggedIn, function(req, res) {
		var name = req.session.passport.user.name || null
		res.render('index', {page:'setup', username: name})
	})
	
	app.get('/result', function(req, res){
	  favoritesService.getTweets(
	    req.query.username,
	    req.session.passport.user.token,
	    req.session.passport.user.tokenSecret,
	    function(tweets){
  	    res.render('result/index', { 
  	      tweets: tweets,
  	      credentials: {
      	    token: req.session.passport.user.token,
      	    tokenSecret: req.session.passport.user.tokenSecret,
      	    username: req.query.username
    	    }
	      });
      }
    );
	});

}
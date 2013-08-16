var passport = require('passport')
  , twitter = require('passport-twitter').Strategy
  , oauth = require('oauth').OAuth
  , filters = require('./actionFilter')


module.exports = function(app) {
	
	app.get('/favorites/:username?', function(req, res) {
		var username = req.params.username || ''
		  , count = req.query.count || 10
		  , path = 'https://api.twitter.com/1.1/favorites/list.json?count='+count
		
		path = !username ? path + '&user_id' + req.session.passport.user.providerId : path + '&screen_name='+username

		var o = new oauth(
		  		'https://api.twitter.com/oauth/request_token',
		  		'https://api.twitter.com/oauth/access_token',
		  		GLOBAL.consumerKey,
		  		GLOBAL.consumerSecret,
		  		'1.0A', '/auth/twitter/callback', 'HMAC-SHA1'
		  	)

		o.get(path, req.session.passport.user.token, req.session.passport.user.tokenSecret, function(error, data) {
			if(error) {
				res.send(error)
			}
			res.send(data)
		})
	})

	// access user through req.session.passposrt.user (sorry)
	passport.serializeUser(function(user, done) {		
		done(null, {
			name: user['name'],
			providerId: user['providerId'],
			token: user['token'],
			tokenSecret: user['tokenSecret']
		})
	});


	// user is all the information returned from twitter
	passport.deserializeUser(function(user, done) {
		done(null, user)
	})


	// Twitter -  just sending provider and id for now
	passport.use(new twitter({
    	consumerKey: GLOBAL.consumerKey,
    	consumerSecret: GLOBAL.consumerSecret,
    	callbackURL: '/auth/twitter/callback'
	}, function(token, tokenSecret, profile, done) {
		var profileObject = {provider: profile.provider, providerId: profile.id, name: profile.username, token:token, tokenSecret:tokenSecret}
		return done(null, profileObject)
	}))


	app.get('/auth/twitter', passport.authenticate('twitter', {session:true}))


	app.get('/auth/twitter/callback', passport.authenticate('twitter',
		{successRedirect: '/', failureRedirect: '/account'}))
}
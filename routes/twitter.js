var passport = require('passport')
  , twitter = require('passport-twitter').Strategy
  , oauth = require('oauth').OAuth
  , filters = require('./actionFilter')


module.exports = function(app) {
	
	// access user through req.session.passposrt.user (sorry) ¯\_(⊙ ︿ ⊙)_/¯ 
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
		{successRedirect: '/setup', failureRedirect: '/'}))
}
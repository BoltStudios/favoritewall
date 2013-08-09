var passport = require('passport')
  , twitter = require('passport-twitter').Strategy
  , User = require('../models/user')


module.exports = function(app) {
	
	app.get('/favorites', function(req, res) {
		
	})

	// access user through req.session.passposrt.user (sorry)
	passport.serializeUser(function(user, done) {		
		done(null, user._id)
	});


	// user is all the information returned from twitter
	passport.deserializeUser(function(user, done) {
		done(null, user)
	})


	// Twitter -  just sending provider and id for now
	passport.use(new twitter({
    	consumerKey: 'lus2i66cmnPgla8zF2q5Q',
    	consumerSecret: '4ZcSL65MtaUKrUu4H0bUKRaF6vADvpEDsykjM68Vs8A',
    	callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
	}, function(token, tokenSecret, profile, done) {
		var profileObject = {provider: profile.provider, providerId: profile.id, name: profile.username}

		User.findOne({provider: profileObject.provider, providerId: profileObject.providerId}, function(error, user) {
			if(error) {
				return done(error)
			} else if(!user) {
				new User(profileObject).save(function(error, newUser) {
					return done(null, newUser)
				})
			} else {
				return done(null, user)
			}
		})
	}))


	app.get('/auth/twitter', passport.authenticate('twitter', {session:true}))


	app.get('/auth/twitter/callback', passport.authenticate('twitter',
		{successRedirect: '/', failureRedirect: '/account'}))
}
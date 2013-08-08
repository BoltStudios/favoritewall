
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

var passport = require('passport')
  , twitter = require('passport-twitter').Strategy

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index', { title: 'Express' })
	})

	// access user through req.user
	passport.serializeUser(function(user, done) {		
		done(null, {
		 	id: user['id'],
		 	provider: user['provider'],
		 	name: user['name']
		});
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
		var object = {provider: profile.provider, id: profile.id}
		var profileObject = {provider: profile.provider, id: profile.id, name: profile.displayName}

		return done(null, profileObject)
		// // Find or create a user!
		// User.findOne(object, function(error, user) {
		// 	if(error) {
		// 		return done(error)
		// 	} else if(!user) {
		// 		new User(profileObject).save(function(error, newUser) {
		// 			return done(null, newUser)
		// 		})
		// 	} else {
		// 		return done(null, user)
		// 	}
		// })
	}))

	app.get('/auth/twitter', passport.authenticate('twitter', {session:true}))

	app.get('/auth/twitter/callback', passport.authenticate('twitter',
		{successRedirect: '/', failureRedirect: '/account'}))

 	/* 
	 	This route makes AngularJS play nicely with Express.
	    Links will still just appear as .../#/viewname in the browser. 
	    Have to create one of these for each directory. 
	*/
	app.get('/home/:viewname', function(req, res) {
		var viewname = req.params.viewname
		console.log(req.params.viewname);
		res.render('home/' + viewname)
	})

	app.get('/:viewname', function(req, res) {
		var viewname = req.params.viewname
		console.log(req.params.viewname);
		res.render('/' + viewname)
	})

	// app.get('/blog/:viewname', function(req, res) {
	// 	var viewname = req.params.viewname
	// 	console.log(req.params.viewname);
	// 	res.render('blog/' + viewname)
	// })
}
module.exports = {

	isLoggedIn: function(req, res, next) {
		console.log('session...... ' + JSON.stringify(req.session))
		if(req.session.passport.user) {
			res.data = {user: req.session.passport.user}
			next()
		} else {
			res.redirect('/login')
		}
	}

}
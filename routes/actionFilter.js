module.exports = {

	isLoggedIn: function(req, res, next) {
		if(req.session.passport.user) {
			res.data = {user: req.session.passport.user}
			next()
		} else {
			res.redirect('/')
		}
	}

}
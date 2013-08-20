
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };
var filters = require('./actionFilter')

module.exports = function(app) {


	require('./twitter')(app)

	app.get('/', function(req, res) {
		res.render('index', {page:'index'})
	})

	app.get('/setup', filters.isLoggedIn, function(req, res) {
		var name = req.session.passport.user.name || null
		res.render('index', {page:'setup', username: name})
	})

	app.get('/why-is-this-free', function(req, res) {
		res.render('index', {page:'why-free'})
	})
	
	app.get('/result', function(req, res){
	  var username = req.query.username;
	  var layout = req.query.layout;
	  res.render('result/index');
	});

}
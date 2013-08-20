
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

module.exports = function(app) {


	require('./twitter')(app)

	app.get('/', function(req, res) {
		res.render('index', {page:'index'})
	})

	app.get('/setup', /*isLoggedIn,*/ function(req, res) {
		res.render('index', {page:'setup'})
	})
	
	app.get('/result', function(req, res){
	  var username = req.query.username;
	  var layout = req.query.layout;
	  res.render('result/index');
	});

}

/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

module.exports = function(app) {
  
  require('./dashboard')(app);

	require('./twitter')(app)


	app.get('/', function(req, res) {
		res.render('index', { title: 'Express' })
	})
	

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

	app.get('/feed/:viewname', function(req, res) {
		var viewname = req.params.viewname
		console.log(req.params.viewname);
		res.render('feed/' + viewname)
	})

	app.get('/:viewname', function(req, res) {
		var viewname = req.params.viewname
		console.log(req.params.viewname);
		res.render('/' + viewname)
	});

	// app.get('/blog/:viewname', function(req, res) {
	// 	var viewname = req.params.viewname
	// 	console.log(req.params.viewname);
	// 	res.render('blog/' + viewname)
	// })
}
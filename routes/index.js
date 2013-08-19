
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

module.exports = function(app) {


	require('./twitter')(app)


	app.get('/', function(req, res) {
		res.render('index', { title: 'Express' })
	})

	app.get('/test', function(req, res) {
		res.render('index_new')
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

	app.get('/search/:viewname', function(req, res) {
		var viewname = req.params.viewname
		console.log(req.params.viewname);
		res.render('search/' + viewname)
	})
	

	app.get('/result', function(req, res){
	  var username = req.query.username;
	  var layout = req.query.layout;
	  console.log(layout)
	  res.render('result/index');
	});

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
var controllers = {
		home: "HomeController"
	,	search: "SearchController"
	,	result: "ResultsController"
}

var views = {
		home: "/home/index"
	,	search: "/search/index"
	, 	result: "/results/index"
}

var app = angular.module('twitterspitter', [])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', 		{ controller: controllers.home, 	templateUrl: views.home   })
			.when('/search',{ controller: controllers.search, 	templateUrl: views.search })
			.when('/result',{ controller: controllers.result, 	templateUrl: views.result })
			.otherwise({ redirectTo: '/' })
	})



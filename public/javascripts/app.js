var controllers = {
		home: "HomeController"
	,	search: "SearchController"
}

var views = {
		home: "/home/index"
	,	search: "/feed/search"
}

var app = angular.module('twitterspitter', [])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', 				{ controller: controllers.home, 	templateUrl: views.home })
			.when('/feed/search', 				{ controller: controllers.search, 	templateUrl: views.search })
			.otherwise({ redirectTo: '/' })
	})



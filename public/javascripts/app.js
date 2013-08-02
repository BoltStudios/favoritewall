var controllers = {
	home: "HomeController"
}

var views = {
	home: "/home/index"
}

var app = angular.module('twitterspitter', [])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', 				{ controller: controllers.home, 	templateUrl: views.home })
			.otherwise({ redirectTo: '/' })
	})



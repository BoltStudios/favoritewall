function SearchController($scope, $location, $http, $routeParams) {
	$scope.title = "Search"
	$scope.username;

	$scope.resultsUrl = function(){
		return "/#/results/?username=" + $scope.username + "&count=" + 20
	}

	$scope.redirect = function(){
		$location.path(callUrl())
	}
}
function SearchController($scope, $location, $http, $routeParams) {
	$scope.title = "Search"
	$scope.username;

	$scope.resultsUrl = function(){
		return "/result/?username=" + $scope.username + "&count=" + 20
	}

	$scope.redirect = function(){
		$location.url($scope.resultsUrl())
	}
}
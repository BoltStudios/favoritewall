function SearchController($scope, $location, $http, $routeParams) {
	$scope.title = "Search"
	$scope.username;
	$scope.twitterApiUrl = "https://api.twitter.com/1.1/favorites/list.json?count=20&screen_name=";

	$scope.callUrl = function(){
		return $scope.twitterApiUrl + $scope.username;
	}
}
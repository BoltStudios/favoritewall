var SearchController = ['$scope', '$location', function($scope, $location) {
	$scope.title = "Search"
	$scope.username;
	$scope.layout = "fullscreen"; //overlay, fullscreen

	$scope.resultsUrl = function(){
		return "/result/?username=" + $scope.username 
					  + "&count=" + 20
					  + "&layout=" + $scope.layout
	}

	$scope.redirect = function(){
		$location.url($scope.resultsUrl())
	}
}]
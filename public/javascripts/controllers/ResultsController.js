var ResultsController = ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {


	$scope.username = (!$routeParams.username || $routeParams.username === "" ? "self" : $routeParams.username)
	$scope.count = $routeParams.count
	getTweets()
	var username = (!$routeParams.username || $routeParams.username === "" ? null : $routeParams.username)
	var favoritesUrl = "/favorites/" + 
						($routeParams.username ? $routeParams.username + "/" : "") + 
						"?count=" + $scope.count


	function getTweets(){
		var url = "/favorites/" + (!$scope.username ? "?count=" : ($scope.username  + "/?count=")) + $scope.count
		var tweets = [];
		$http.get(url)
			.success(function(response){
				$scope.tweets = response
				window.tweets = $scope.tweets // for jQuery
			})
			.error(function(response){
				$scope.error = "Error loading tweets. Sorry."
			})
	}

}]



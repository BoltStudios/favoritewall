function ResultsController($scope, $location, $http, $routeParams) {

	console.log("why won't you log")
	$scope.username = (!$routeParams.username || $routeParams.username === "" ? "self" : $routeParams.username)
	$scope.count = $routeParams.count
	$scope.tweets = getTweets()
	var username = (!$routeParams.username || $routeParams.username === "" ? null : $routeParams.username)
	var favoritesUrl = "/favorites/" + 
						($routeParams.username ? $routeParams.username + "/" : "") + 
						"?count=" + $scope.count
	console.log(favoritesUrl)


	function getTweets(){
		/* live */
		var url = "/favorites/" + (!$scope.username ? "?count=" : ($scope.username  + "/?count=")) + $scope.count
		var tweets = [];
		$http.get(url)
			.success(function(response){
				console.log(response)
				tweets = response
			})
			.error(function(response){
				console.log(response)
			})
			console.log(tweets)
			return tweets
	}
}



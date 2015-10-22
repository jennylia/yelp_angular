app.controller('MainController',['$scope', 'yelpFactory', function($scope, yelpFactory){

	// yelpFactory.success( function(data) {
	// 	$scope.data = data.businesses;
	// });

	$scope.getFood = function(city){
		// alert("city " + city);
		yelpFactory.getFood(city).then(
			function(data){
				$scope.data = data.data.businesses;
			}
		).catch(function(error){
			console.log(error);
		})
	};

}]);
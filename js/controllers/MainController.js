app.controller('MainController',['$scope', 'yelpFactory', function($scope, yelpFactory){

	yelpFactory.success( function(data) {
		$scope.data = data.businesses;
	});
}]);
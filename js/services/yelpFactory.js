app.factory('yelpFactory',['$http', function($http){
	var url = 'http://localhost:3000/yelp';
	return $http.get(url).success(function(data){
		return data;
	}).error(function(error){
		return error;
	});
}]);
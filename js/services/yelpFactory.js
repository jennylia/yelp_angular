app.factory('yelpFactory',['$http', function($http){
	var data = {
		location: "vancouver"
	};
	var city = "Burnaby";
	var location = "?location=" + city;
	var url = 'http://localhost:3000/yelp' + location;
	return $http.get(url).success(function(data){
		return data;
	}).error(function(error){
		return error;
	});
}]);

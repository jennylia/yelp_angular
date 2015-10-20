app.directive('itemView', function(){
	return{
		restrict: 'E',
		scope: {
			place: '='
		},
		templateUrl: 'js/directives/itemView.html'
	};
});
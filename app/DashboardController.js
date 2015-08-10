mytheater.controller('DashboardController',["$scope", "$timeout","$state",function($scope,$timeout,$state){
	console.log('DashboardController');
	
	
	$scope.select = function(id,page){
		var $this = angular.element(id);
		$this.addClass('selected');
		
		angular.element(".db-panel.selected").addClass('rotateOut animated');

		angular.element(".db-panel").not('.selected').addClass('zoomOut animated');

		$timeout(function() {


			$state.go(page);
		}, 800);
		


	}
	
}]);
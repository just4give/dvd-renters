mytheater.controller('RentController',["$scope","$rootScope", "$timeout","IMDBService",
	function($scope,$rootScope,$timeout,IMDBService){
	console.log('RentController');
	
	$scope.date = new Date();
	
	$rootScope.getPoster = function(movieId){
		return $rootScope.posterMap[movieId];
	}
	
	

	$timeout(function(){
	var menu = angular.element(".menu-wrapper");
	var scrlContainer = angular.element("#rentlist");	
	scrlContainer.css("height", menu.height()+'px');

	

	},0);


	$scope.orderForRent = function(movieId,posterPath){
		var indx = $.inArray(movieId, $rootScope.wishlist);
		if(indx == -1){
			$rootScope.wishlist.push(movieId);
			$rootScope.wishMap[movieId]= posterPath;
		}else{
			$rootScope.wishlist.splice(indx,1);
			
		}
		
	}

	$scope.isRented = function(movieId){

		var indx = $.inArray(movieId, $rootScope.wishlist);

		

		return (indx==-1 ? false:true);
	}
	
}]);
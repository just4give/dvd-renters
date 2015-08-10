mytheater.controller('WishlistController',["$scope","$rootScope", "$timeout","IMDBService","$modal",
	function($scope,$rootScope,$timeout,IMDBService,$modal){
	console.log('WishlistController');
	
	$rootScope.rentlist =$rootScope.rentlist || [];
	
	$rootScope.getPoster = function(movieId){
		return $rootScope.posterMap[movieId].posterPath;
	}
	$rootScope.getTitle = function(movieId){
		return $rootScope.posterMap[movieId].title;
	}
	

	$timeout(function(){
	var menu = angular.element(".menu-wrapper");
	var scrlContainer = angular.element("#wishlist");	
	scrlContainer.css("height", menu.height()+'px');

	

	},0);


	$scope.orderForRent = function(movieId){

		var indx = $.inArray(movieId, $rootScope.rentlist);
		if(indx == -1){
			$rootScope.rentlist.push(movieId);
			
		}else{
			var modal = $modal({title:'Duplicate',content:'You just ordered this movie', show:false});
			modal.$promise.then(modal.show);
			
		}
		
	}

	$scope.isRented = function(movieId){

		var indx = $.inArray(movieId, $rootScope.rentlist);
		return (indx==-1 ? false:true);
	}
	
	
}]);
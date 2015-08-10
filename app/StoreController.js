mytheater.controller('StoreController',["$scope","$rootScope", "$timeout","IMDBService","$modal",
	function($scope,$rootScope,$timeout,IMDBService,$modal){
	console.log('StoreController');
	
	$scope.dvds=[];
	$rootScope.wishlist =$rootScope.wishlist || [];
	$rootScope.posterMap = $rootScope.posterMap || {};

	//var myModal = $modal({title: 'My Title', content: 'My Content', show: false});

	//var myCustomModal = $modal({templateUrl: '../views/modal-mov-details.html', show:false});
	// function MyModalController($scope) {
 //    $rootScope.title = 'Some Title';
 //    $rootScope.content = 'Hello Modal<br />This is a multiline message from a controller!';
 //  }
 //  MyModalController.$inject = ['$scope'];
  var myModal = $modal({templateUrl: 'views/modal-mov-details.html', show: false});
 
	
	IMDBService.upcoming().then(function(data){
		console.log('Movie details returned from API '+JSON.stringify(data));

		$scope.dvds = data;

	},function(err){
		console.log('Movie details returned error');
	});

	$timeout(function(){
	var menu = angular.element(".menu-wrapper");
	var scrlContainer = angular.element("#store");	
	scrlContainer.css("height", menu.height()+'px');

	
	
	},0);

	$(".movie-gallery img").hover(function(){
		console.log("hover");
	})

	$scope.searchMovie = function(key){

		
		
		
			IMDBService.findMovie(key).then(function(data){
				
				$scope.dvds = data;

			},function(err){
				console.log('Movie search returned error');
			});
	}

	$scope.addToWishlist = function(movieId,posterPath,title){
		var indx = $.inArray(movieId, $rootScope.wishlist);
		if(indx == -1){
			$rootScope.wishlist.push(movieId);
			$rootScope.posterMap[movieId]= {posterPath: posterPath, title: title};
		}else{
			$rootScope.wishlist.splice(indx,1);
			
		}
		
	}

	$scope.isWished = function(movieId){

		var indx = $.inArray(movieId, $rootScope.wishlist);

		

		return (indx==-1 ? false:true);
	}

	$scope.viewMovie = function(id,name,overview){
		$rootScope.title = name;
		$rootScope.overview = overview;

		myModal.$promise.then(myModal.show);
		
	}

	
	
}]);
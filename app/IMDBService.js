mytheater.factory('IMDBService', ["$http","$q", function($http,$q){

    var apiKey='cc36008b47e84f8e1c58abb0f81c8e1e';
    var endUrl = 'https://api.themoviedb.org/3/movie/';
    var searchEndUrl = 'https://api.themoviedb.org/3/search/movie';
    
	var _upcoming = function(){

			var deferred = $q.defer();

			$http.get(endUrl +'upcoming?api_key='+ apiKey+'&append_to_response=casts')
			.success(function(res) {
				//console.log(JSON.stringify(res.results));
		    	deferred.resolve(res.results);

		  	})
		  	.error(function(err) {
		    
		    deferred.reject(err);
		  	});
		  return deferred.promise;
	}

	var _findMovie = function(key){

			var deferred = $q.defer();

			$http.get(searchEndUrl +'?query='+key+'&append_to_response=movie_credits&api_key='+ apiKey)
			.success(function(res) {
				console.log(JSON.stringify(res.results));
		    	deferred.resolve(res.results);

		  	})
		  	.error(function(err) {
		    
		    deferred.reject(err);
		  	});
		  return deferred.promise;
	}

	return{
		upcoming : _upcoming,
		findMovie : _findMovie
	}

}])
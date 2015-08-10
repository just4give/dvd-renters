mytheater.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('/', {
            url: '/',
            templateUrl: 'views/dash-board.html',
            controller: 'DashboardController'
        })
        .state('wishlist', {
            url: '/wishlist',
            templateUrl: 'views/my-wishlist.html',
            controller: 'WishlistController'
        })
        .state('store', {
            url: '/store',
            templateUrl: 'views/movie-store.html',
            controller: 'StoreController'
        })
        .state('rent', {
            url: '/rent',
            templateUrl: 'views/my-rent.html',
            controller: 'RentController'
        });

   
        
      
        
});

mytheater.run(["$rootScope", "$log", function($rootScope, $log){
   $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 

       $log.info('state changed to '+toState.name);

       $(".menu-wrapper a").removeClass("active");

       switch(toState.name){
        case '/' : $("#a-id-home").addClass("active"); break;
        case 'wishlist' : $("#a-id-wishlist").addClass("active"); break;
        case 'store' : $("#a-id-store").addClass("active"); break;
        case 'rent' : $("#a-id-rent").addClass("active"); break;

       }
       

    })

}]);
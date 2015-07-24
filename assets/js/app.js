var mytheater = angular.module('mytheater',['ui.router','ngAnimate']);

mytheater.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('/', {
            url: '/',
            templateUrl: 'views/watchedlist.html',
            controller: 'WatchedlistController'
        })
        .state('wishlist', {
            url: '/wishlist',
            templateUrl: 'views/mywishlist.html',
            controller: 'WatchedlistController'
        });
        
      
        
});
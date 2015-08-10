var mytheater = angular.module('mytheater',['ui.router','ngAnimate','mgcrea.ngStrap']);

mytheater.config(function($modalProvider) {
  angular.extend($modalProvider.defaults, {
    html: true
  });
})


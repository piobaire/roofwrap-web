'use strict';

angular.module('roofwrapApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  })
}])

.controller('HomeController', ['$scope', function($scope) {
}]);

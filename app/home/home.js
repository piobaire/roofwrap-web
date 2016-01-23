'use strict';

angular.module('roofwrapApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', [function() {

}]);

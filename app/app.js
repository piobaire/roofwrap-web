'use strict';

angular.module('roofwrapApp', [
    'ngRoute',
    'roofwrapApp.home',
    'roofwrapApp.test'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

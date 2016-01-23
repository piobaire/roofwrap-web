'use strict';

angular.module('roofwrapApp.test', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test', {
    templateUrl: 'test/test.html',
    controller: 'TestController'
  });
}])

.controller('TestController', [function(){
  
}]);

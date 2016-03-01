angular.module('roofwrapApp', [
  'ngMaterial',
  'ngRoute',
  'roofwrapApp.base'
])
.config(function ($routeProvider) {
  $routeProvider.when('/home', { templateUrl: 'templates/home.html', controller: 'BaseController'});
  $routeProvider.when('/test', { templateUrl: 'templates/test.html', controller: 'BaseController'});
  $routeProvider.otherwise({redirectTo: '/home'});
});

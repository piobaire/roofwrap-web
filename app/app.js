angular.module('roofwrapApp', [
  'ngMaterial',
  'ngRoute',
  'ngSanitize',
  'roofwrapApp.base',
  'roofwrapApp.ScreenHelper',
  'roofwrapApp.menuDirective'
])
.config(function ($routeProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://roofwrap.com/dev/**']);

  $routeProvider.when('/home', { templateUrl: 'templates/home.html', controller: 'BaseController'});
  $routeProvider.when('/test', { templateUrl: 'templates/test.html', controller: 'BaseController'});
  $routeProvider.otherwise({redirectTo: '/home'});
});

'use strict';

angular.module('roofwrapApp', [
  'ngRoute',
  'roofwrapApp.home',
  'roofwrapApp.test',
  'angular-responsive'
])
.config(function($routeProvider, responsiveHelperProvider){
  var device = 'desktop';
  var responsiveHelper = responsiveHelperProvider.$get();
  if (responsiveHelper.isSmartDevice() && responsiveHelper.isSm()) {
    device = 'mobile';
  }

  console.log(responsiveHelper.isMobile());

  console.log(device);

  $routeProvider.when('/home', {templateUrl: 'home/home.html', controller: 'HomeController'});
  $routeProvider.when('/test', {templateUrl: 'test/test.html', controller: 'TestController'});
  $routeProvider.otherwise({redirectTo: '/home'});
});

'use strict';

angular.module('roofwrapApp.BaseController', [])
.controller('BaseController', ['$scope', 'ScreenHelper', '$timeout', function($scope, ScreenHelperFactory, $timeout) {
  $scope.responsiveHelper = ScreenHelperFactory;
  $scope.closeMenu = function() {
    $timeout(function () {
      console.log("closeMenu");
    }, 100);
  };
  $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute){
    $scope.closeMenu();
  });
}]);

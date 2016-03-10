'use strict';

angular.module('roofwrapApp.BaseController', [])
.controller('BaseController', ['$scope', 'ScreenHelper', function($scope, ScreenHelperFactory) {
  $scope.responsiveHelper = ScreenHelperFactory;
}]);

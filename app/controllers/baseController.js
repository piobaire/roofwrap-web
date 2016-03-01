'use strict';

angular.module('roofwrapApp.base', [])
.controller('BaseController', ['$scope', 'ScreenHelper', function($scope, ScreenHelperFactory) {
  $scope.responsiveHelper = ScreenHelperFactory;
}]);

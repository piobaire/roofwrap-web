'use strict';

angular.module('roofwrapApp.base', [])
.factory('ResponsiveChecker', ['$window', function ResponsiveCheckerFactory($window) {

  var winWidth = $window.innerWidth || $window.outerWidth;
  var helper = {
      isExtraSmall: function () { return winWidth < 768; },
      isSmall: function () { return winWidth >= 768 && winWidth < 992; },
      isMedium: function () { return winWidth >= 992 && winWidth < 1200; },
      isLarge: function () { return winWidth >= 1200; },
      isSmartDevice: function () {
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      },
      isMobile: function() {
        return this.isSmartDevice() && this.isXs();
      }
    };

  return helper;
}])
.controller('BaseController', ['$scope', 'ResponsiveChecker', function($scope, ResponsiveCheckerFactory) {
  $scope.responsiveHelper = ResponsiveCheckerFactory;
}]);

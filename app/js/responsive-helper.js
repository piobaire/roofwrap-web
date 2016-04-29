'use strict';

angular.module('roofwrapApp.ScreenHelper', [])
.factory('ScreenHelper', ["$window", function ScreenHelperFactory($window) {

    var winWidth = $window.innerWidth || $window.outerWidth;
    var helper = {
        isExtraSmall: function () { return winWidth < 768; },
        isSmall: function () { return winWidth >= 768 && winWidth < 992; },
        isMedium: function () { return winWidth >= 992 && winWidth < 1200; },
        isLarge: function () { return winWidth >= 1200; },
        isSmartDevice: function () {
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }
      };

    return helper;
}]);

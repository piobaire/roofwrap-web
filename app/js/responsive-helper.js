'use strict';

angular.module('responsiveHelper', [])
.provider('responsiveHelper', ["$windowProvider", function responsiveHelperProvider($windowProvider) {

  this.$get = [$windowProvider, function($windowProvider) {
    var $window  = $windowProvider.$get();
    var winWidth = $window.innerWidth || $window.outerWidth;
    var helper   = {
      isXs: function () { return winWidth < 768; },
      isSm: function () { return winWidth >= 768 && winWidth < 992; },
      isMd: function () { return winWidth >= 992 && winWidth < 1200; },
      isLg: function () { return winWidth >= 1200; },
      isSmartDevice: function () {
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      },
      isMobile: function() {
        return this.isSmartDevice() && this.isXs();
      }
    };
    return helper;
  }];
}]);

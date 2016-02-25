(function ( angular ) {
  'use strict';

  angular
  .module('angular-responsive', [])
  .provider('responsiveHelper', ["$windowProvider", function ($windowProvider) {
    var $window  = $windowProvider.$get();
    // is better get first the innerWitdh that will not include a lateral panel like the console inspector, bookmarks, etc
    var winWidth = $window.innerWidth || $window.outerWidth;
    var helper   = {
      isSmartDevice : isSmartDevice( $window ),
      isXs: function () { return winWidth < 768; },
      isSm: function () { return winWidth >= 768 && winWidth < 992; },
      isMd: function () { return winWidth >= 992 && winWidth < 1200; },
      isLg: function () { return winWidth >= 1200; }
    };

    // Publish accessor function...
    this.$get = function() {
      return helper;
    };
  }])

  /**
  * Extra small devices Phones (<768px)
  */
  .directive('arXs', ['responsiveHelper', function (responsiveHelper) {
    return {
      restrict    : "EAC",
      transclude  : 'element',
      template    : '<div></div>',
      compile     : buildCompileFn( 'arXs', responsiveHelper.isXs )
    };
  }])

  /**
  * Small devices Tablets (≥768px)
  */
  .directive('arSm', ['responsiveHelper', function (responsiveHelper) {
    return {
      restrict    : "EAC",
      transclude  : 'element',
      template    : '<div></div>',
      compile     : buildCompileFn( 'arSm', responsiveHelper.isSm )
    };
  }])

  /**
  * Medium devices Desktops (≥992px)
  */
  .directive('arMd', ['responsiveHelper', function (responsiveHelper) {
    return {
      restrict    : "EAC",
      transclude  : 'element',
      template    : '<div></div>',
      compile     : buildCompileFn( 'arMd', responsiveHelper.isMd )
    };
  }])

  /**
  * Large devices Desktops (≥1200px)
  */
  .directive('arLg', ['responsiveHelper', function (responsiveHelper) {
    return {
      restrict    : "EAC",
      transclude  : 'element',
      template    : '<div></div>',
      compile     : buildCompileFn( 'arLg', responsiveHelper.isLg )
    };
  }])

  .directive('arResponsive', ['responsiveHelper', function (responsiveHelper) {
    return {
      restrict    : "EAC",
      transclude  : 'element',
      template    : '<div></div>',
      compile     : buildCompileFn( 'arResponsive', checkAllTypes(responsiveHelper) )
    };
  }]);

  function buildCompileFn(responsiveType, verifyFn ) {
    return function compile(element, attr, transclude) {
      return function postLink(scope, element, attr) {
        var childElement, childScope,
        config  = scope.$eval( attr[responsiveType] ),
        unwatch = scope.$watch( config, function () {

          // attribute changed, delete existing element & $scope
          if (childElement) {
            childElement.remove();
            childScope.$destroy();
            childElement = undefined;
            childScope = undefined;
          }

          if ( verifyFn(config) ) {
            // Create a new element and $scope...
            childScope = scope.$new();
            childElement = transclude(childScope, function (clone) {
              element.after(clone);
            });
          }
        });

        // Fix memory leak an remove watcher when element/directive is released
        scope.$on( "$destroy", unwatch );
      };
    };
  }

  function checkAllTypes(responsiveHelper) {
    return function( deviceTypes ) {
      return  ( deviceTypes['xs']  && responsiveHelper.isXs()  ) ||
      ( deviceTypes['sm']  && responsiveHelper.isSm()  ) ||
      ( deviceTypes['md']  && responsiveHelper.isMd()  ) ||
      ( deviceTypes['lg'] && responsiveHelper.isLg() ) || false;
    };
  }

  function isSmartDevice( $window ) {
  var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
  return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
}

function isMobile($window, windowWidth) {
  return isSmartDevice($window) && (windowWidth <= 767);
}})( window.angular );

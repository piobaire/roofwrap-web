angular.module('roofwrapApp.RoofwrapMenu', ['ngSanitize'])
.directive('roofwrapMenu', ['ScreenHelper', '$sce', function (ScreenHelperFactory, $sce){
  var responsiveHelper = ScreenHelperFactory;
  var responsiveMenu = 'templates/desktop-menu.html';
  if (responsiveHelper.isExtraSmall() || responsiveHelper.isSmall()) {
    responsiveMenu = 'templates/mobile-menu.html';
  }
  var menuTemplate = $sce.trustAsResourceUrl(responsiveMenu);
  return {
    restrict: 'ACE',
    templateUrl: menuTemplate
  }
}]);

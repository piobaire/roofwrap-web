angular.module('roofwrapApp.menuDirective', ['ngSanitize'])
.directive('roofwrapMenu', ['ScreenHelper', '$sce', function (ScreenHelperFactory, $sce){
  var responsiveHelper = ScreenHelperFactory;
  var responsiveMenu = 'templates/desktop-menu.html';
  if (responsiveHelper.isExtraSmall()) {
    responsiveMenu = 'templates/mobile-menu.html';
  }
  var menuTemplate = $sce.trustAsResourceUrl(responsiveMenu);
  return {
    restrict: 'ACE',
    templateUrl: menuTemplate
  }
}]);

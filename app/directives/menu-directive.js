angular.module('roofwrapApp.menuDirective', [])
.directive('roofwrapMenu', ['ScreenHelper', function (ScreenHelperFactory){
  var responsiveHelper = ScreenHelperFactory;
  var responsiveMenu = 'templates/desktop-menu.html';
  if (responsiveHelper.isExtraSmall()) {
    responsiveMenu = 'templates/mobile-menu.html';
  }
  return {
    restrict: 'ACE',
    templateUrl: responsiveMenu
  }
}]);

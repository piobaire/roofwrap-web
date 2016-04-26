'use strict';

angular.module('roofwrapApp.ProductsController', [])
.controller('ProductsController', ['$scope', 'ScreenHelper', 'FileFactory', function($scope, ScreenHelperFactory, FileFactory) {
  $scope.responsiveHelper = ScreenHelperFactory;
  FileFactory.getFile('products.json').then( function (promise) {
    $scope.products = promise.data;
  })
  .catch( function (promise, status) {
    $scope.products = {};
    var errorCategory = {};
    var error = {};
    error.productName = 'Something went wrong while trying to fetch the data. Please try to refresh your browser, or contact us if this problem persists. Some debugging information that might help us: ' + status;
    errorCategory.categoryName = 'ERROR!';
    errorCategory.products = [error];
    $scope.products.categories = [errorCategory];
  });
}]);

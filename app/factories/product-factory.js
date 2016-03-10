angular.module('roofwrapApp.ProductFactory', [])
.factory('ProductFactory', ['$http', function($http){
  var productFactory = {};

  productFactory.getProducts = function() {
    return $http.get('products.json');
  }

  return productFactory;
}]);

angular.module('roofwrapApp.FileFactory', [])
.factory('FileFactory', ['$http', function($http){
  var fileFactory = {};

  fileFactory.getFile = function(file) {
    return $http.get(file);
  }

  return fileFactory;
}]);

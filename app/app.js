'use strict';

angular.module('roofwrapApp', [
    'ngRoute',
    'roofwrapApp.home'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

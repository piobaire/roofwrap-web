angular.module('roofwrapApp', [
  'ngMaterial',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'roofwrapApp.BaseController',
  'roofwrapApp.ProductsController',
  'roofwrapApp.CalculatorController',
  'roofwrapApp.ScreenHelper',
  'roofwrapApp.RoofwrapMenu',
  'roofwrapApp.FileFactory'
])
.config(function ($routeProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://roofwrap.com/dev/**']);

  $routeProvider.when('/home',                             { templateUrl: 'templates/home.html', controller: 'BaseController'});
  $routeProvider.when('/pricing',                          { templateUrl: 'templates/pricing.html', controller: 'BaseController'});
  $routeProvider.when('/overview',                         { templateUrl: 'templates/overview.html', controller: 'BaseController'});
  $routeProvider.when('/descriptions/:productName',        { templateUrl: function(urlattr){
    return 'templates/descriptions/' + urlattr.productName + '.html';
  }, controller: 'ProductsController' });
  $routeProvider.when('/products',                         { templateUrl: 'templates/descriptions.html', controller: 'ProductsController' });
  $routeProvider.when('/about',                            { templateUrl: 'templates/about.html', controller: 'BaseController' });
  $routeProvider.when('/history',                          { templateUrl: 'templates/history.html', controller: 'BaseController' });
  $routeProvider.when('/brochure',                         { templateUrl: 'templates/brochure.html', controller: 'BaseController' });
  $routeProvider.when('/warranty',                         { templateUrl: 'templates/warranty.html', controller: 'BaseController' });
  $routeProvider.when('/faq',                              { templateUrl: 'templates/faq.html', controller: 'BaseController' });
  $routeProvider.when('/contractor',                       { templateUrl: 'templates/contractor.html', controller: 'BaseController' });
  $routeProvider.when('/diagrams/construction',            { templateUrl: 'templates/construction.html', controller: 'BaseController' });
  $routeProvider.when('/installation',                     { templateUrl: 'templates/installation.html', controller: 'BaseController' });
  $routeProvider.when('/contact',                          { templateUrl: 'templates/contact.html', controller: 'BaseController' });
  $routeProvider.when('/calculator',                       { templateUrl: 'templates/calculator.html', controller: 'CalculatorController'})
  $routeProvider.otherwise(                                { templateUrl: 'templates/404.html', controller: 'BaseController'});
});

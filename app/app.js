angular.module('roofwrapApp', [
  'ngMaterial',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'roofwrapApp.base',
  'roofwrapApp.ScreenHelper',
  'roofwrapApp.menuDirective'
])
.config(function ($routeProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://roofwrap.com/dev/**']);

  $routeProvider.when('/home',                  { templateUrl: 'templates/home.html', controller: 'BaseController'});
  $routeProvider.when('/pricing',               { templateUrl: 'templates/pricing.html', controller: 'BaseController'});
  $routeProvider.when('/overview',              { templateUrl: 'templates/overview.html', controller: 'BaseController'});
  $routeProvider.when('/product/descriptions',  { templateUrl: 'templates/descriptions.html', controller: 'BaseController' });
  $routeProvider.when('/about',                 { templateUrl: 'templates/about.html', controller: 'BaseController' });
  $routeProvider.when('/history',               { templateUrl: 'templates/history.html', controller: 'BaseController' });
  $routeProvider.when('/brochure',              { templateUrl: 'templates/brochure.html', controller: 'BaseController' });
  $routeProvider.when('/warranty',              { templateUrl: 'templates/warranty.html', controller: 'BaseController' });
  $routeProvider.when('/faq',                   { templateUrl: 'templates/faq.html', controller: 'BaseController' });
  $routeProvider.when('/contractor',            { templateUrl: 'templates/contractor.html', controller: 'BaseController' });
  $routeProvider.when('/diagrams/construction', { templateUrl: 'templates/construction.html', controller: 'BaseController' });
  $routeProvider.when('/installation',          { templateUrl: 'templates/installation.html', controller: 'BaseController' });
  $routeProvider.when('/contact',               { templateUrl: 'templates/contact.html', controller: 'BaseController' });
  $routeProvider.otherwise({redirectTo: '/home'});
});

'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.about',
  'myApp.version',
  'hljs'
]).
config(['$routeProvider', 'hljsServiceProvider', function($routeProvider, hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

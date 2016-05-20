'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  $routeProvider.when('/projects/:projectId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View1Ctrl', ['projects', '$scope', function(projects, $scope) {
    $scope.projects = projects.getProjectList();
}]);
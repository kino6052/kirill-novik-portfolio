'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', 'projects', function($scope, $routeParams, projects) {
  var routeId = Number($routeParams.projectId)
  $scope.routeId = routeId;
  $scope.project = projects.getProjectList()[routeId-1];
  hljs.initHighlightingOnLoad();
}]);
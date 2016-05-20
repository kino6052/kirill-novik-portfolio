'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', '$sce', 'projects', function($scope, $routeParams, $sce, projects) {
  var routeId = Number($routeParams.projectId)
  $scope.routeId = routeId;
  $scope.page = 0;
  $scope.row = Math.floor((routeId-1)/3);
  $scope.project = projects.getProjectList()[$scope.row][((routeId-1)%3)];
  $scope.trust = $sce.trustAsHtml;
  $scope.changePage = function(argument){
    $scope.page = Number(argument);
  }
  hljs.initHighlightingOnLoad();
}]);
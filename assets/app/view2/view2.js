'use strict';

angular.module('myApp.view2', ['ngRoute', 'hljs'])

.config(['$routeProvider', 'hljsServiceProvider', function($routeProvider, hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
  $routeProvider.when('/view2', {
    templateUrl: '/app/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', '$sce', 'projects', '$compile', function($scope, $routeParams, $sce, projects, $compile) {
  var routeId = Number($routeParams.projectId);
  $scope.routeId = routeId;
  $scope.page = 0;
  $scope.row = Math.floor((routeId-1)/3);
  $scope.project = projects.getProjectList()[$scope.row][((routeId-1)%3)];
  $scope.trust = $sce.trustAsHtml;
  $scope.changePage = function(argument){
    $scope.page = Number(argument);
  };
  $scope.currentCodePage = 0;
  $scope.currentCodePageName = $scope.project.code[$scope.currentCodePage][0]
  $scope.code = $scope.project.code[$scope.currentCodePage][1];
}]);
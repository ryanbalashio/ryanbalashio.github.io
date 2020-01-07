var app = angular.module('app', ['ngAnimate', 'ui.bootstrap']);

var dataCtrl = app.controller('dataCtrl', ['$scope', '$window', function ($scope, $window) {

  $scope.sanctuaries = $window.sanctuaries;
  $scope.antiSanctuaries = $window.antiSanctuaries;
  $scope.noVotes = $window.noVotes;
}]);
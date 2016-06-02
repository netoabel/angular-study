'use strict';

angular.module('stockDogApp')
  .controller('MainCtrl', function($scope, $location, WatchlistService) {
    $scope.watchlists = WatchlistService.query();
    $scope.$watch(function() {
      return $location.path();
    }, function(path) {
      if (_.includes(path, 'watchlist')) {
        $scope.activeView = 'watchlist';
      } else {
        $scope.activeView = 'dashboard';
      }
    });
  });
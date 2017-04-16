'use strict';

angular.module('controllers.checkinCtrl', [])
  .controller('CheckinCtrl', function($scope, checkinService) {
    $scope.test = checkinService.test;
  });

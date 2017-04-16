'use strict';

angular.module('controllers.adminSurveyCtrl', [])
  .controller('AdminSurveyCtrl', function($scope, adminSurveyService) {
    $scope.test = adminSurveyService.test;
    console.log('in admin survey ctrl 2');
  });

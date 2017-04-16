'use strict';

angular.module('controllers.adminCtrl', [])
  .controller('AdminCtrl', function($scope) {
    $scope.sites = [
      {
        name: 'Site 1',
        foo: 1
      },
      {
        name: 'Site 2',
        foo: 2
      }
    ];
    $scope.surveySites = [
      {
        name: 'Site 2',
        foo: 2
      }
    ];
    console.log('admin ctrl');
  });

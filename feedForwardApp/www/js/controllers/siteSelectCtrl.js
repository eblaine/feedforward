'use strict';

angular.module('controllers.siteSelectCtrl', [])
  .controller('SiteSelectCtrl', ['$scope', 'siteService', function($scope, siteService) {
    $scope.sites = siteService.getSites();
  }]);

'use strict';

angular.module('controllers.siteSelectCtrl', [])
  .controller('SiteSelectCtrl', ['$scope', 'siteService', function($scope, siteService) {
    siteService.getSites().then(function() {
      $scope.sites = siteService.sites;
    });
  }]);

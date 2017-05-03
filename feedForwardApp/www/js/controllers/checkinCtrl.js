'use strict';

angular.module('controllers.checkinCtrl', [])
  .controller('CheckinCtrl', ['$scope', '$location', '$stateParams', 'checkinService', 'siteService', 'lodash', function($scope, $location, $stateParams, checkinService, siteService, lodash) {
    console.log('checkin');
    siteService.getSites().then(function () {
      $scope.sites = siteService.sites;
      $scope.siteSearchData = $scope.constructSiteSearch($scope.sites);
    });
    $scope.constructSiteSearch = function(data) {
      return lodash.map(data, function(o) {return {'name': o.metadata.name, 'data': o};});
    }




  }]);

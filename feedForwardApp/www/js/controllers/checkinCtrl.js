'use strict';

angular.module('controllers.checkinCtrl', [])
  .controller('CheckinCtrl', ['$scope', '$location', '$stateParams', 'checkinService', 'siteService', 'lodash', function($scope, $location, $stateParams, checkinService, siteService, lodash) {
    console.log('checkin');
    $scope.sites = siteService.getSites();

    $scope.constructSiteSearch = function(data) {
      return lodash.map(data, function(o) {return {'name': o.metadata.name, 'data': o};});
    }

    $scope.siteSearchData = $scope.constructSiteSearch($scope.sites);


  }]);

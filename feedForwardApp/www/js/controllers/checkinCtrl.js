'use strict';

angular.module('controllers.checkinCtrl', [])
  .controller('CheckinCtrl', ['$scope', '$location', '$stateParams', 'checkinService', 'siteService', 'lodash', function($scope, $location, $stateParams, checkinService, siteService, lodash) {

    $scope.constructSiteSearch = function(data) {
      return lodash.map(data, function(o) {return {'name': o.metadata.name, 'data': o};});
    }

    var sites = siteService.getSites();
    sites.$loaded()
    .then(function (data) {
      $scope.sites = data;
      $scope.siteSearchData = $scope.constructSiteSearch($scope.sites);
    })
    .catch(function (error) {
      console.error(error);
    })






  }]);

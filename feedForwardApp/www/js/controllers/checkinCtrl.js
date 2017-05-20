'use strict';

angular.module('controllers.checkinCtrl', [])
  .controller('CheckinCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'lodash', function($scope, $location, $stateParams, siteService, lodash) {

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
    // fun AngularJS ideosyncrasy "always have a dot in your model"...or you'll have weird ngModel problems
    $scope.data = {searchText: ''}

    $scope.updateMatches = function() {
      if (!$scope.data.searchText) {
        return;
      }
      $scope.matches = lodash.filter($scope.siteSearchData, function(o) {
        var nameInsensitiveCase = o.name.toLowerCase();
        return nameInsensitiveCase.includes($scope.data.searchText.toLowerCase());
      });
    } ;


    $scope.changeView = function(item) {
      $location.path('/tab/checkin/' + item.data.$id);
    }







  }]);

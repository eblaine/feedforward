'use strict';

angular.module('controllers.siteSelectCtrl', [])
  .controller('SiteSelectCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'lodash', function($scope, $location, $stateParams, siteService, lodash) {

    $scope.constructSiteSearch = function(data) {
      return lodash.map(data, function(o) {return {'name': o.name, 'data': o};});
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
        $scope.matches = [];
        return;
      }
      $scope.matches = lodash.filter($scope.siteSearchData, function(o) {
        var nameInsensitiveCase = o.name.toLowerCase();
        return nameInsensitiveCase.includes($scope.data.searchText.toLowerCase());
      });
    };


    $scope.changeView = function(item) {
      siteService.setSite(item.data);
      $location.path('/tab/converse');
    }







  }]);

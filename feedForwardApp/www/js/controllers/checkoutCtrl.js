'use strict';

angular.module('controllers.checkoutCtrl', [])
  .controller('CheckoutCtrl', ['$scope', 'siteService', function($scope, siteService) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.selectedSite = siteService.getSelectedSite();
    // $scope.sites = siteService.getSites();
    // $scope.updateSite = function(newSite) {
    //   $scope.selectedSite = newSite;
    //   siteService.setSite(newSite);
    // }

    // TODO add code to send responses to back end
  }]);

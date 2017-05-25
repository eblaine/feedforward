'use strict';

angular.module('controllers.checkoutCtrl', [])
  .controller('CheckoutCtrl', ['$scope', '$location', 'siteService', 'nutritionService', '$firebaseObject', function($scope, $location,  siteService, nutritionService, $firebaseObject) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.selectedSite = siteService.getSelectedSite();
    if(!$scope.selectedSite) {
        return $location.path('/sites');
    }
    $scope.foodInfo = nutritionService.getFoodInfo($scope.selectedSite.currFood);
    var feedbackRef = firebase.database().ref('feedback').child($scope.selectedSite['feedbackObj']);
    self.feedbackInfo = $firebaseObject(feedbackRef);
    $scope.checkout = {};			
    $scope.sendCheckoutForm = function(){
       console.log(typeof($scope.checkout.rating));
    };
    // $scope.sites = siteService.getSites();
    // $scope.updateSite = function(newSite) {
    //   $scope.selectedSite = newSite;
    //   siteService.setSite(newSite);
    // }

    // TODO add code to send responses to back end
  }]);

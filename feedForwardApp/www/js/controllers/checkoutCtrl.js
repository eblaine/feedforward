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

    var feedbackRef = firebase.database().ref('feedback').child($scope.selectedSite.$id);
    var feedbackInfo = $firebaseObject(feedbackRef);
    $scope.checkout = {};			

    $scope.sendCheckoutForm = function(){
       var key = $scope.selectedSite['currFood'];
       var nutritionArray = feedbackInfo['nutrition'];
       var index;
       for(var x in nutritionArray){
             if(key == nutritionArray[x]['infoID']){
                  index = x;
             }
       }
       var oldRating = feedbackInfo['nutrition'][index]['rating'];
       var totalNum = feedbackInfo['nutrition'][index]['totalRatings'];
       oldRating *= totalNum;
       oldRating+= $scope.checkout.bonusQuestion;
       totalNum++;
       var newRating = oldRating/totalNum;
       feedbackInfo['nutrition'][index]['rating'] = newRating;
       feedbackInfo['nutrition'][index]['totalRatings'] = totalNum;
       feedbackInfo['comments'].push($scope.checkout.story);
       var avgRating = feedbackInfo['avgRating'];
       var numFeedback = feedbackInfo['totalRatings'];
       avgRating *= numFeedback;
       avgRating += $scope.checkout.rating;
       numFeedback++;
       feedbackInfo['avgRating'] = avgRating/numFeedback;
       feedbackInfo['totalRatings'] = numFeedback;
       feedbackInfo.$save();
       return $location.path('/tab/converse');
    };
    // $scope.sites = siteService.getSites();
    // $scope.updateSite = function(newSite) {
    //   $scope.selectedSite = newSite;
    //   siteService.setSite(newSite);
    // }

    // TODO add code to send responses to back end
  }]);

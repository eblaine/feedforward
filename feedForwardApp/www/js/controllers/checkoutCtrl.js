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
/*
    $scope.selectedSite = siteService.getSelectedSite();
    if(!$scope.selectedSite) {
        return $location.path('/sites');
    }
    // $scope.foodInfo = nutritionService.getFoodInfo($scope.selectedSite.currFood);
    var questionArray = $firebaseObject(firebase.database().ref('feedback').child($scope.selectedSite.$id));
    var feedbackQuestionArray = $firebaseObject(firebase.database().ref('feedbackQuestions'));
    $scope.bonusQuestionID = [];
    $scope.bonusQuestions = [];
    questionArray.$loaded().then(function(data){
           var questionArray = data['questions'];
           for(var questions in questionArray){
                if(questionArray[questions]['active']){
                     $scope.bonusQuestionID.push(questionArray[questions]['questionID']);
} 
           }
            
feedbackQuestionArray.$loaded().then(function(feedback){
    for(var question in $scope.bonusQuestionID){
          $scope.bonusQuestions.push(feedback[$scope.bonusQuestionID[question]]['question']);
     }
});
     });
*/


    $scope.selectedSite = siteService.getSelectedSite();
    if(!$scope.selectedSite) {
        return $location.path('/sites');
    }
    // $scope.foodInfo = nutritionService.getFoodInfo($scope.selectedSite.currFood);
    var questionArray = $firebaseObject(firebase.database().ref('feedback').child($scope.selectedSite.$id));
    var feedbackQuestionArray = $firebaseObject(firebase.database().ref('feedbackQuestions'));
    $scope.bonusQuestionID = [];
    $scope.bonusQuestions = [];
    questionArray.$loaded().then(function(data){
           var questionArray = data['questions'];
           for(var questions in questionArray){
                if(questionArray[questions]['active']){
                     $scope.bonusQuestionID.push({questionID: questionArray[questions]['questionID'], questionKey: questions});
} 
           }
            
feedbackQuestionArray.$loaded().then(function(feedback){
    for(var question in $scope.bonusQuestionID){
          $scope.bonusQuestions.push({question: feedback[$scope.bonusQuestionID[question].questionID]['question'], answer: 0, id: $scope.bonusQuestionID[question].questionKey});
     }
});
     });

    //console.log(questionArray['questions']);
    //for(var question in questionArray){
          //console.log(question);
   // }
    // var feedbackInfo = $firebaseObject(feedbackRef);
    // $scope.checkout = {};			

$scope.checkout = {};
$scope.sendCheckoutForm = function(){
        questionArray['comments'].push($scope.checkout.story);
        var avgRating = questionArray['avgRating'];
        var numFeedback = questionArray['totalRatings'];
        avgRating *= numFeedback;
        avgRating += $scope.checkout.rating;
        numFeedback++;
        questionArray['avgRating'] = avgRating/numFeedback;
        questionArray['totalRatings'] = numFeedback;
	for(var questionObj in $scope.bonusQuestions){
            var question = $scope.bonusQuestions[questionObj];
            var oldRating = questionArray['questions'][question.id]['rating'];
            var totalNum = questionArray['questions'][question.id]['totalRatings'];
            oldRating *= totalNum;
            oldRating += question.answer;
            totalNum++;
            questionArray['questions'][question.id]['rating'] = oldRating/totalNum;
            questionArray['questions'][question.id]['totalRatings'] = totalNum;
        }
        questionArray.$save();
        return $location.path('/tab/converse');
}
    // $scope.sendCheckoutForm = function(){
    //    var key = $scope.selectedSite['currFood'];
    //    var nutritionArray = feedbackInfo['nutrition'];
    //    var index;
    //    for(var x in nutritionArray){
    //          if(key == nutritionArray[x]['infoID']){
    //               index = x;
    //          }
    //    }
    //    var oldRating = feedbackInfo['nutrition'][index]['rating'];
    //    var totalNum = feedbackInfo['nutrition'][index]['totalRatings'];
    //    oldRating *= totalNum;
    //    oldRating+= $scope.checkout.bonusQuestion;
    //    totalNum++;
    //    var newRating = oldRating/totalNum;
    //    feedbackInfo['nutrition'][index]['rating'] = newRating;
    //    feedbackInfo['nutrition'][index]['totalRatings'] = totalNum;
    //    feedbackInfo['comments'].push($scope.checkout.story);
    //    var avgRating = feedbackInfo['avgRating'];
    //    var numFeedback = feedbackInfo['totalRatings'];
    //    avgRating *= numFeedback;
    //    avgRating += $scope.checkout.rating;
    //    numFeedback++;
    //    feedbackInfo['avgRating'] = avgRating/numFeedback;
    //    feedbackInfo['totalRatings'] = numFeedback;
    //    feedbackInfo.$save();
    //    return $location.path('/tab/converse');
    // };
    // $scope.sites = siteService.getSites();
    // $scope.updateSite = function(newSite) {
    //   $scope.selectedSite = newSite;
    //   siteService.setSite(newSite);
    // }

    // TODO add code to send responses to back end
  }]);

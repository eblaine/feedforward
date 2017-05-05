'use strict';

angular.module('controllers.surveyCtrl', [])
  .controller('SurveyCtrl', ['$scope', '$location', '$stateParams', 'siteService', '$firebaseObject', function($scope, $location, $stateParams, siteService, $firebaseObject) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.selectedSite = siteService.getSelectedSite();

		
		var siteId = $scope.selectedSite['surveys'][0];
		console.log(siteId, typeof(siteId));
		var ref = firebase.database().ref('surveyInstances').child(siteId);
		$scope.surveyInstance = $firebaseObject(ref);

    $scope.questionNo = 0;

    $scope.answerQuestion = function(answer) {
      answer.count++;
			$scope.surveyInstance.$save();
      $scope.questionNo++;

    }

    $scope.startOver = function() {
      $scope.questionNo = 0;
      $location.path('/tab/checkin/' + $stateParams.siteId);
    }

  }]);

'use strict';

angular.module('controllers.surveyCtrl', [])
  .controller('SurveyCtrl', ['$scope', '$location', 'siteService', function($scope, $location, siteService) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.selectedSite = siteService.getSelectedSite();

    // TODO: insert code to determine which survey to administer. For now, wizard of oz
    $scope.surveyInstance = {
      id: '1',
      siteId: '1',
      date: 'a valid date string',
      questions: [
        {
          question: 'Did you use the butternut squash recipe from last month?',
          answerOptions: [
            {display: 'Yes', count: 4},
            {display: 'No', count: 0}
          ]
        }
      ]
    }

    $scope.questionNo = 0;

    $scope.answerQuestion = function(answer) {
      answer.count++;
      $scope.questionNo++;

      // TODO: backend stuff
    }

    $scope.startOver = function() {
      $scope.questionNo = 0;
      $location.path('/tab/checkin');
    }

  }]);

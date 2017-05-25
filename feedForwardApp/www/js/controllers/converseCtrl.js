'use strict';

angular.module('controllers.converseCtrl', [])
  .controller('ConverseCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'nutritionService', 'lodash', function($scope, $location, $stateParams, siteService, nutritionService, lodash) {

    $scope.site = siteService.getSelectedSite();
    if (!$scope.site) {
      return $location.path('/sites');
    }

    $scope.foodInfo = nutritionService.getFoodInfo($scope.site.currFood);
    // console.log($scope.foodInfo[0]);
    $scope.nutritionPanels = [
      {
        title: 'Key Phrases',
        caption: 'In the language of this site',
        url: '/#/tab/converse/phrases'
      },
      {
        title: 'Recipe cards',
        caption: 'From SHFB web site',
        url: 'secondharvest.com'
      },
      {
        title: 'MyPlate',
        caption: 'Detailed information about MyPlate',
        url: 'myplate.gov'
      }
    ]

    $scope.panelClicked = function(url) {
      $location.url(url);
    }

    $scope.viewDemo = function() {
      $location.path('/tab/converse/demo')
    }


  }]);

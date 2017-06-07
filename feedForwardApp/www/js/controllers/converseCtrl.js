'use strict';

angular.module('controllers.converseCtrl', [])
  .controller('ConverseCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'nutritionService', 'lodash', function($scope, $location, $stateParams, siteService, nutritionService, lodash) {

    $scope.site = siteService.getSelectedSite();
    if (!$scope.site) {
      return $location.path('/sites');
    }

    $scope.nutritionSrvc = nutritionService;
    nutritionService.filterNutritionBySite($scope.site.currNutrition)

    // console.log($scope.foodInfo);
    // $scope.nutritionPanels = [
    //   {
    //     title: 'Key Phrases',
    //     caption: 'In the language of this site',
    //     url: '/#/tab/converse/phrases'
    //   },
    //   {
    //     title: 'Recipe cards',
    //     caption: 'From SHFB web site',
    //     url: '/'
    //   },
    //   {
    //     title: 'MyPlate',
    //     caption: 'Detailed information about MyPlate',
    //     url: '/'
    //   }
    // ]

    // $scope.panelClicked = function(url) {
    //   $location.url(url);
    // }

    // $scope.viewDemo = function() {
    //   $location.path('/tab/converse/demo');
    // }

    $scope.goBackToSites = function(){
      $location.path('/sites');
    }


  }]);

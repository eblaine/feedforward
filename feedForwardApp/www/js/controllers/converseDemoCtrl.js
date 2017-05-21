'use strict';

angular.module('controllers.converseDemoCtrl', [])
  .controller('ConverseDemoCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'nutritionService', 'lodash', function($scope, $location, $stateParams, siteService, nutritionService, lodash) {

    $scope.food = nutritionService.getFoodInfo()[0];

    $scope.data = {};

    $scope.demoPanels = [
      {
        title: 'How to Cook',
        caption: 'Saute with salt, olive oil, pepper'
      },
      {
        title: 'How to Store',
        caption: 'Keep in a plastic bag in the fridge for up to a week'
      }
    ]

    // for the carousel
    // function setupSlider() {
    //   //some options to pass to our slider
    //   $scope.data.sliderOptions = {
    //     initialSlide: 0,
    //     direction: 'horizontal', //or vertical
    //     speed: 300 //0.3s transition
    //   };

    //   //create delegate reference to link with slider
    //   $scope.data.sliderDelegate = null;

    //   //watch our sliderDelegate reference, and use it when it becomes available
    //   $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
    //     if (newVal != null) {
    //       $scope.data.sliderDelegate.on('slideChangeEnd', function() {
    //         $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
    //         //use $scope.$apply() to refresh any content external to the slider
    //         $scope.$apply();
    //       });
    //     }
    //   });
    // };

    // setupSlider();



  }]);

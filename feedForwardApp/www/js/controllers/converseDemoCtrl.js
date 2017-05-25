'use strict';

angular.module('controllers.converseDemoCtrl', [])
  .controller('ConverseDemoCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'nutritionService', 'lodash', function($scope, $location, $stateParams, siteService, nutritionService, lodash) {

    $scope.food = nutritionService.getFoodInfo();
    if (!$scope.food) {
        return $location.path('/tab/converse');
    }

  }]);

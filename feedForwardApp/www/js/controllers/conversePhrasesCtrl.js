'use strict';

angular.module('controllers.conversePhrasesCtrl', [])
  .controller('ConversePhrasesCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'nutritionService', 'lodash', function($scope, $location, $stateParams, siteService, nutritionService, lodash) {

    $scope.site = siteService.getSelectedSite();

    // todo get from elsewhere
    var phrases = {
      spanish: {
        name: 'Spanish',
        welcome: 'Bienvenidos!',
        recipeCard: 'Quiere receta usted?'
      },
      english: {
        name: 'English',
        welcome: 'Welcome!',
        recipeCard: 'Would you like a recipe card?'
      },
      mandarin: {
        name: 'Mandarin',
        welcome: 'mandarin Welcome!',
        recipeCard: 'mandarin Would you like a recipe card?'
      },
      russian: {
        name: 'Russian',
        welcome: 'russian Welcome!',
        recipeCard: 'russian Would you like a recipe card?'
      },
      vietnamese: {
        name: 'Vietnamese',
        welcome: 'viet Welcome!',
        recipeCard: 'viet Would you like a recipe card?'
      },
    };

    $scope.languages = lodash.filter(phrases, function(phraseSet) {
      return lodash.includes($scope.site.languages, phraseSet.name);
    });
    // $scope.foodInfo = nutritionService.getFoodInfo($scope.site.currFood);

    // $scope.nutritionPanels = [
    //   {
    //     title: 'Key Phrases',
    //     caption: 'In the language of this site',
    //     url: 'tab/converse/phrases'
    //   },
    //   {
    //     title: 'Recipe cards',
    //     caption: 'From SHFB web site',
    //     url: 'secondharvest.com'
    //   },
    //   {
    //     title: 'MyPlate',
    //     caption: 'Detailed information about MyPlate',
    //     url: 'myplate.gov'
    //   }
    // ]

    // $scope.panelClicked = function(url) {
    //   $location.url(url);
    // }


  }]);

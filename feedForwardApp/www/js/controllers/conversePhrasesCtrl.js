'use strict';

angular.module('controllers.conversePhrasesCtrl', [])
  .controller('ConversePhrasesCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'nutritionService', 'lodash', function($scope, $location, $stateParams, siteService, nutritionService, lodash) {

    $scope.site = siteService.getSelectedSite();
    var englishPhrases = {
      name: 'English',
      welcome: 'Welcome!',
      recipeCard: 'Would you like a recipe card?'
    };

    // todo get from elsewhere
    var phrases = {
      spanish: {
        name: 'Spanish',
        welcome: 'Bienvenidos!',
        recipeCard: 'Quiere receta usted?'
      },
      mandarin: {
        name: 'Mandarin',
        welcome: 'huān yíng',
        recipeCard: 'Nǐ xiǎng yào shípǔ ma?'
      },
      russian: {
        name: 'Russian',
        welcome: 'dobro pozhalovat\'',
        recipeCard: 'Khotite retsept?'
      },
      vietnamese: {
        name: 'Vietnamese',
        welcome: 'Chào mừng',
        recipeCard: 'Bạn có muốn một công thức?'
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

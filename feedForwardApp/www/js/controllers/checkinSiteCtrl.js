'use strict';

angular.module('controllers.checkinSiteCtrl', [])
  .controller('CheckinSiteCtrl', ['$scope', '$location', '$stateParams', 'siteService', 'lodash', function($scope, $location, $stateParams, siteService, lodash) {

    $scope.updateSite = function(newSite) {
      $scope.selectedSite = newSite;
      siteService.setSite(newSite);
      if (newSite) {
        $scope.clientSearchData = $scope.constructClientSearch($scope.selectedSite.metadata.clients);
      } else {
        $location.path('/tab/checkin');
      }
    }

    function initSite() {
      var siteId = $stateParams.siteId;
      if (siteId) {
        var selected = lodash.find($scope.sites, {'$id': siteId});
        $scope.updateSite(selected);
      }
    }

    // note: can use services to make data persist as needed
    $scope.updateClient = function(newClient) {
      $location.path('/survey/' + siteId);
    }

    $scope.nutritionPanels = [
      {
        title: 'Brown Rice',
        text: 'Brown rice is healthy and delicious. It takes 40 minutes to prepare in a rice cooker and reduces the risk of diabetes as compared to white rice. It does not totally suck.'
      },
      {
        title: 'Brussel Sprouts',
        text: 'My grandmother told me it is "brussel sprouts" not "brussels sprouts." I am not sure if she is correct, but who the hell cares? This veggie is tasty with some butter, garlic, salt and pepper!'
      }
    ];

    $scope.data = {};

    // for the carousel
    function setupSlider() {
      //some options to pass to our slider
      $scope.data.sliderOptions = {
        initialSlide: 0,
        direction: 'horizontal', //or vertical
        speed: 300 //0.3s transition
      };

      //create delegate reference to link with slider
      $scope.data.sliderDelegate = null;

      //watch our sliderDelegate reference, and use it when it becomes available
      $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
        if (newVal != null) {
          $scope.data.sliderDelegate.on('slideChangeEnd', function() {
            $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
            //use $scope.$apply() to refresh any content external to the slider
            $scope.$apply();
          });
        }
      });
    };

    setupSlider();

    // search for client
    $scope.constructClientSearch = function(data) {
      return lodash.map(data, function(o) {return {'name': o.name, 'data': o};});
    }

    // change sites
    $scope.chooseSite = function() {
      $location.path('/tab/checkin');
    }

    var sites = siteService.getSites();
    sites.$loaded()
    .then(function (data) {
      $scope.sites = data;
      initSite();
    })
    .catch(function (error) {
      console.error(error);
    })

    // angular JS "always have a dot in your model"
    $scope.data = {searchText: ''};

    $scope.updateMatches = function() {
      if (!$scope.data.searchText) {
        return;
      }
      $scope.matches = lodash.filter($scope.clientSearchData, function(o) {
        var nameInsensitiveCase = o.name.toLowerCase();
        return nameInsensitiveCase.includes($scope.data.searchText.toLowerCase());
      });
    };

//
    $scope.changeView = function(item) {
      $location.path('/survey/' + $scope.selectedSite.$id);
    }








  }]);

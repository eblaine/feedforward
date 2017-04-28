'use strict';

angular.module('controllers.checkinSiteCtrl', [])
  .controller('CheckinSiteCtrl', ['$scope', '$location', '$stateParams', 'checkinService', 'siteService', 'lodash', function($scope, $location, $stateParams, checkinService, siteService, lodash) {
    $scope.sites = siteService.getSites();
    $scope.updateSite = function(newSite) {
      $scope.selectedSite = newSite;
      siteService.setSite(newSite);
      if (newSite) {
        $scope.clientSearchData = $scope.constructClientSearch($scope.selectedSite.metadata.clients);
      } else {
        $location.path('/tab/checkin');
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
    $scope.constructClientSearch = function(data) {
      return lodash.map(data, function(o) {return {'name': o.name, 'data': o};});
    }

    var siteId = $stateParams.siteId;
    if (siteId) {
      var selected = lodash.find($scope.sites, {'id': $stateParams.siteId});
      console.log(selected)
      $scope.updateSite(selected);
    }

    $scope.chooseSite = function() {
      $location.path('/tab/checkin');
    }


//
//
//    $scope.siteSearchData = $scope.constructSiteSearch($scope.sites);


//    $scope.getClientName = function(client) {
//      console.log(client);
//      return client.name;
//    }

//    console.log($scope.test);
    // later, will be checkinService.getSites(...).then(...)
  }]);

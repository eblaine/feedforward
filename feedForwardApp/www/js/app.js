// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('feedForwardApp', ['ionic',
  'controllers.siteSelectCtrl',
  'controllers.converseCtrl',
  'controllers.checkoutCtrl',
  'controllers.surveyCtrl',
  'controllers.checkinSiteCtrl',
  'controllers.conversePhrasesCtrl',
  'controllers.converseDemoCtrl',
  'services.siteService',
  'services.nutritionService',
  'directives.ffSearch',
  'ion-autocomplete',
  'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.converse', {
    url: '/converse',
    views: {
      'tab-converse': {
        templateUrl: 'templates/converse.html',
        controller: 'ConverseCtrl'
      }
    }
  })

  .state('tab.conversephrases', {
    url: '/converse/phrases',
    views: {
      'tab-converse': {
        templateUrl: 'templates/converse-phrases.html',
        controller: 'ConversePhrasesCtrl'
      }
    }
  })

  .state('tab.conversedemo', {
    url: '/converse/demo',
    views: {
      'tab-converse': {
        templateUrl: 'templates/converse-demo.html',
        controller: 'ConverseDemoCtrl'
      }
    }
  })

  // .state('tab.sitecheckin', {
  //   url: '/checkin/:siteId',
  //   views: {
  //     'tab-checkin': {
  //       templateUrl: 'templates/tab-checkin-site.html',
  //       controller: 'CheckinSiteCtrl'
  //     }
  //   }
  // })

  // .state('tab.checkin', {
  //   url: '/checkin',
  //   views: {
  //     'tab-checkin': {
  //       templateUrl: 'templates/tab-checkin.html',
  //       controller: 'CheckinCtrl'
  //     }
  //   }
  // })

  .state('tab.checkout', {
      url: '/checkout',
      views: {
        'tab-checkout': {
          templateUrl: 'templates/tab-checkout.html',
          controller: 'CheckoutCtrl'
        }
      }
  })

  // .state('survey', {
  //   url: '/survey/:siteId',
  //   templateUrl: 'templates/survey.html',
  //   controller: 'SurveyCtrl'
  // });

  .state('sites', {
    url: '/sites',
    templateUrl: 'templates/sites.html',
    controller: 'SiteSelectCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/tab/checkin');
  $urlRouterProvider.otherwise('/sites');

});

/* Make lodash an injectable service */
angular.module('lodash', [])
.factory('lodash', ['$window', function($window) {
    return $window._; // assumes underscore has already been loaded on the page
}]);

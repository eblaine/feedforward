 // Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('feedForwardAdmin', ['ionic',
 // mostly just placeholder-y
 'controllers.adminSurveyCtrl',
 'controllers.adminCtrl',
 'services.adminSurveyService'])


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
   .state('admin', {
   url: '/admin',
   abstract: true,
   controller: 'AdminCtrl',
   templateUrl: 'templates/admin.html'
 })

 // Each tab has its own nav history stack:

 .state('admin.survey', {
   url: '/survey',
   views: {
     'adminMenu': {
       templateUrl: 'templates/admin-survey.html',
       controller: 'AdminSurveyCtrl'
     }
   }
 });

 // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/admin/survey');

 });

 /* Make lodash an injectable service */
 angular.module('lodash', [])
 .factory('lodash', ['$window', function($window) {
     return $window._; // assumes underscore has already been loaded on the page
 }]);

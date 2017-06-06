'use strict';

angular.module('services.nutritionService', ['lodash'])
  .service('nutritionService', function(lodash, $http, $firebaseArray, $firebaseObject) {
        var self = this;
        var nutritionRef = firebase.database().ref('nutritionInfo');
        var nutritionArray = $firebaseArray(nutritionRef)

        // self.getFoodInfo = function(currFood) {
        //   if (!self.foodInfo) {
        //     var query = nutritionRef.child(currFood);
        //     self.foodInfo = $firebaseObject(query);
        //   } 
        //   return self.foodInfo;
        // }

        var activeNutritionRef = firebase.database().ref('activeNutrition');
        var activeNutrition = $firebaseArray(activeNutritionRef);
        nutritionArray.$loaded()
        .then(function(){
            self.activeIds = lodash.map(activeNutrition, 'id');

            nutritionArray.$loaded()
            .then(function() {
              self.nutritionInfo = []
              for (var nutId in self.activeIds) {
                self.nutritionInfo.push(nutritionArray[nutId]);
              }

            });

        });

        var permInfoRef = firebase.database().ref('permanentInfo');
        self.permanentInfo = $firebaseArray(permInfoRef);

        

//           function initSites() {
//             var query = sitesRef.orderByChild('id');

//             self.sites = $firebaseArray(query);
//             return self.sites;
// //            return sitesRef.once('value', function(snapshot) {
// //              self.sites = snapshot.val();
// //            });
//           }


//           self.getSites = function () {
//             if (!self.sites) {
//               return initSites();
//             }
//             return self.sites;
//           }

//           self.getSelectedSite = function () {
//             return self.selectedSite;
//           }

//           self.setSite = function(site) {
//             console.log('setting site to ' + JSON.stringify(site));
//             self.selectedSite = site;
//           }

    }
  );

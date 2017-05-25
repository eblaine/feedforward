'use strict';

angular.module('services.nutritionService', ['lodash'])
  .service('nutritionService', function(lodash, $http, $firebaseArray, $firebaseObject) {
        var self = this;
        var nutritionRef = firebase.database().ref('nutrition_info');

        self.getFoodInfo = function(currFood) {
          if (!self.foodInfo) {
            var query = nutritionRef.child(currFood);
            self.foodInfo = $firebaseObject(query);
            console.log(self.foodInfo);
          } 
          return self.foodInfo;
        }

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

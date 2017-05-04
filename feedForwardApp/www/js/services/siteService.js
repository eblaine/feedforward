'use strict';

angular.module('services.siteService', ['lodash'])
    .service('siteService', function(lodash, $http, $q, $firebaseArray) {
          var self = this;
          var sitesRef = firebase.database().ref('sites');

          function initSites() {
            var query = sitesRef.orderByChild('id');

            self.sites = $firebaseArray(query);
            return self.sites;
//            return sitesRef.once('value', function(snapshot) {
//              self.sites = snapshot.val();
//            });
          }


          self.getSites = function () {
            if (!self.sites) {
              return initSites();
            }
            return self.sites;
          }

          self.getSelectedSite = function () {
            return self.selectedSite;
          }

          self.setSite = function(site) {
            self.selectedSite = site;
          }

        }
    );

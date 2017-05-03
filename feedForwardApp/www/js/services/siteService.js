'use strict';

angular.module('services.siteService', ['lodash'])
    .service('siteService', function(lodash, $http, $q) {
          var self = this;

          function initSites() {
            var sitesRef = firebase.database().ref('sites');
            return sitesRef.once('value', function(snapshot) {
              self.sites = snapshot.val();
            });
          }


          self.getSites = function () {
            if (self.sites) {
              var deferred = $q.defer();
              deferred.resolve();
              return deferred.promise;
            } else {
              return initSites();
            }
          }

          self.getSelectedSite = function () {
            return self.selectedSite;
          }

          self.setSite = function(site) {
            self.selectedSite = site;
          }

        }
    );

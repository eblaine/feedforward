'use strict';

angular.module('services.siteService', ['lodash'])
    .service('siteService', function(lodash, $http) {
          var self = this;
          self.sites = [
            {
              id: '1',
              metadata: {
                name: 'Site 1',

                languages: ['Spanish', 'Vietnamese'],
                clients: [
                  {
                    name: 'Client 1',
                    id: '1'
                  },
                  {
                    name: 'Client 2',
                    id: '2'
                  },
                  {
                    name: 'Client 3',
                    id: '3'
                  }
                ]
              },
              surveys: ['1', '2', '3', '4']
            },
            {
              id: '2',
              metadata: {
                name: 'Site 2',

                languages: ['Chinese', 'Vietnamese'],
                clients: [
                  {
                    name: 'Client 11',
                    id: '11'
                  },
                  {
                    name: 'Client 22',
                    id: '22'
                  },
                  {
                    name: 'Client 3_3',
                    id: '33'
                  }
                ]
              },
              surveys: ['1', '4', '5']
            }
          ];


          self.getSites = function () {
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

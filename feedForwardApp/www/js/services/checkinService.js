'use strict';

angular.module('services.checkinService', ['lodash'])
    .service('checkinService', ["lodash",
        function(lodash) {
          this.test = 'Hello checkin!';


        }
    ]);

'use strict';

angular.module('services.checkinService', ['lodash'])
    .service('checkinService', ["lodash", '$http',
        function(lodash, $http) {
          this.test = 'Hello checkin!';
        }
    ]);

'use strict';

angular.module('services.checkoutService', ['lodash'])
    .service('checkoutService', ["lodash",
        function(lodash) {
          this.test = 'Hello checkout!';
        }
    ]);

'use strict';

angular.module('services.adminSurveyService', ['lodash'])
    .service('adminSurveyService', ["lodash",
        function(lodash) {
          this.test = 'Hello admin!';


        }
    ]);

'use strict';

angular.module('directives.ffSearch', [])
    .directive('ffSearch', ['lodash', '$location', 'siteService', function(lodash, $location, siteService) {
        return {
            restrict: 'E',
            scope: {
                "ngModel": "=",
                "data": "=", // [{label: 'site 1', data: {...<actual data>...}]
                "type": "@"

//                    // not just ng-disabled)
            },
            templateUrl: '/templates/ff-search.html',
            link: function(scope, element, attrs, ctrl) {

                scope.searchText = '';

                scope.$watch('searchText', function(newVal, oldVal) {
                  if (!newVal) {
                    return;
                  }
                  scope.matches = lodash.filter(scope.data, function(o) {
                    var nameInsensitiveCase = o.name.toLowerCase();
                    return nameInsensitiveCase.includes(newVal.toLowerCase());
                  });

                });

                scope.changeView = function(item) {
                  if (scope.type === 'survey') {
                    var site = siteService.getSelectedSite();
                    $location.path('/survey/' + site.id);
                  } else if (scope.type === 'site') {
                    $location.path('/tab/checkin/' + item.data.id);
                  }
                }

            }
        }
    }]);

'use strict';

angular.module("fantasticBoxCo")

.directive('dimensionsBox', function() {
  return {
    scope: {},
    templateUrl: './js/directives/views/dimensions-box.html',
    link: function(scope) {
        var dimensions = {
            height:   0,
            width:    0,
            length:   0,
            quantity: 0
        }

        scope.isComplete = function() {
            return dimensions.height && dimensions.width && dimensions.length && dimensions.quantity;
        };

        scope.dimensions = dimensions;
    }
  };
});
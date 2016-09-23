//restricting it to be used on elements only and setting up variables
(function(){
    'use strict';
    
    angular
        .module('hotelApp')
        .directive('hotelRating', function(){
            return {
                restrict: 'E',
                templateUrl: 'scripts/directives/rating/ratingdirective.html',
                scope: {
                    hotelRatings: "@"
                }
            }
        });
    
})();


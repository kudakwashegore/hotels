//rating directive
//this directive can be reused whenever there is need to display reviews of a hotel
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


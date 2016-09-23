//restricting it to be used on elements only and setting up variables
(function(){
    'use strict';
    
    angular
        .module('hotelApp')
        .directive('hotelReviews', function(){
            return {
                restrict: 'E',
                templateUrl: 'scripts/directives/reviews/reviewsdirective.html',
                replace: true,
                scope: {
                    reviewName: "@",
                    reviewComment: "@",
                    reviewPositive: "="
                }
            }
        });
    
})();


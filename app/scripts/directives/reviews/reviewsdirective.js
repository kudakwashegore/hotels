//Review directive
//this directive can be reused whenever there is need to show user reviews
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


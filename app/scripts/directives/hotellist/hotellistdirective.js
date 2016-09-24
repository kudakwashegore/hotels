//hotel list directive
//this directive will be reused whenever there is need to display a list of hotels
(function(){
    'use strict';
    
    angular
        .module('hotelApp')
        .directive('hotelList', function(){
            return {
                restrict: 'E',
                templateUrl: 'scripts/directives/hotellist/hotellistdirective.html',
                replace: true,
                scope: {
                        hotelId: "@",
                        hotelName: "@",
                        hotelCountry: "@",
                        hotelCity: "@",
                        hotelThumb: "@",
                        hotelDateStart: "@",
                        hotelDateEnd: "@",
                        hotelStars: "@",
                        hotelRating: "@",
                        hotelPrice: "@",
                        hotelDescription: "@",
                        hotelReviews: "&",
                        hotelsReviews: '=',
                        dateFormat: "@"                        
                }
            }
        });
    
})();


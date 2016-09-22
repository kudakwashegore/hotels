//restricting it to be used on elements only and setting up variables
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
                        dateFormat: "@"                        
                }
            }
        });
    
})();


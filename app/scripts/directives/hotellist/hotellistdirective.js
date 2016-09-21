//restricting it to be used on elements only and setting up variables
(function(){
    'use strict';
    
    angular
        .module('hotelApp')
        .directive('hotelList', function(){
            return {
                restrict: 'E',
                templateUrl: 'directives/hotellist/hotellist.html',
                replace: true,
                scope: {
                }
            }
        });
    
})();


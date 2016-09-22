//our hotel data factory 
(function(){
    'use strict';
    
    angular
    .module('hotelApp')
    .factory('GitDataFactory',['$http',function($http){  
         return {
            getData: function(url) {
                 //return the promise.
                 return $http.get(url)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data;
                        });
                }
        }
    }]);
    
})();

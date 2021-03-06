//our hotel data factory 
(function(){
    'use strict';
    
    angular
    .module('hotelApp')
    .factory('GitDataFactory',['$http',function($http){  
         return {
            //variable to store loaded reviews in memory 
            reviews: {},
            //function to do all ajax calls in the app
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

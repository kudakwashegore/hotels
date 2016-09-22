//controller for hotel list view 
(function(){
    'use strict';
 
    angular
        .module('hotelApp')
        .controller('hotelListController',['$scope','GitDataFactory',function($scope,GitDataFactory){ 
            
            var count = 0;
            GitDataFactory
                .getData('http://fake-hotel-api.herokuapp.com/api/hotels?count=' + (count + 5))
                .then(function(hotels) {
                    $scope.hotels = hotels;
            });
                         
        }]);//end controller
 
 })();

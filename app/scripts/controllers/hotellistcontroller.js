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
            
            //get reviews         
            $scope.getReviews = function(id){
                    if(GitDataFactory.reviews[id] === undefined){
                        GitDataFactory
                            .getData('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=' + id)
                            .then(function(reviews) {                               
                                GitDataFactory.reviews[id] = reviews;
                        });
                    }
                 
                
                 $scope.reviews = GitDataFactory.reviews;
            }
            
                         
        }]);//end controller
 
 })();

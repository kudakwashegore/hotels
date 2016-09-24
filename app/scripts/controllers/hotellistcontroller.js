//controller for hotel list view 
(function(){
    'use strict';
 
    angular
        .module('hotelApp')
        .controller('hotelListController',['$scope','config','GitDataFactory',function($scope,config,GitDataFactory){             
            
            //load hotels
            $scope.loadHotels = function(){
                $scope.showSpin = true;
                $scope.error = false;
                GitDataFactory
                    .getData(config.hotelListApiUrl + 5)
                    .then(function(hotels) {
                        //request was successful
                        $scope.hotels = hotels;
                        $scope.showSpin = false;
                }, function(resp){
                    //an error was encountered during the request
                    $scope.error = resp;
                });
            }
            
            
            //get reviews         
            $scope.getReviews = function(id){
                    //get reviews for hotel id if not loaded already
                    if(GitDataFactory.reviews[id] === undefined || GitDataFactory.reviews[id].length < 1){
                        GitDataFactory
                            .getData(config.hotelReviewsApiUrl + id)
                            .then(function(reviews) {                               
                                GitDataFactory.reviews[id] = reviews;
                        });
                    }
                 
                 //add reviews to scope reviews
                 $scope.reviews = GitDataFactory.reviews;
            }
            
                         
        }]);//end controller
 
 })();

//setting up our route configurations
(function(){
    'use strict'
    
    angular
        .module('hotelApp')
        .config(function($routeProvider){
            $routeProvider
                //setting up route and controller for hotel list 
                .when('/hotel-list',{
                    templateUrl: "templates/hotellist.html",
                    controller: "hotelListController"
                })
                .otherwise({redirectTo : '/hotel-list'});

        });
    
})();

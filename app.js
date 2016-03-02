/*global angular */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    "use strict";
    $routeProvider
    
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
    
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        });
    
});

myApp.controller('mainController', ['$scope', '$location', '$log',
                                    function ($scope, $location, $log) {
        "use strict";
        $log.info($location.path());
        $scope.name = 'Main';
                                        
    }]);

myApp.controller('secondController', ['$scope', '$location', '$log',
                                    function ($scope, $location, $log) {
        "use strict";
        $log.info($location.path());
        $scope.name = 'Second';
    }]);
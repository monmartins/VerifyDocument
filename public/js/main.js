angular.module('verifydocument', ['ngAnimate', 'ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider, $httpProvider) {



    $routeProvider.when('/', {
        templateUrl: 'partials/principal.html',
        controller: 'TokenController'
    });


    $routeProvider.otherwise({redirectTo: '/'});

});
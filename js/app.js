var app = angular.module('PolyApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            // controller: 'HomeCtrl',
            templateUrl: 'views/home.html'
        })
        .when('/about', {
            // controller: 'AboutCtrl',
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
});
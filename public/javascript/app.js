angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/homeview.html',
            controller: 'homeCtrl'
        })
        // .state('chart', {
        //     url: '/chart',
        //     templateUrl: '../views/chartview.html'
        // })
    $urlRouterProvider
        .otherwise('/');
});

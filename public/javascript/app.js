angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/homeview.html',
            controller: 'homeCtrl'
        })
        .state('item', {
            url: '/item/:index',
            templateUrl: 'views/itemview.html'
        })
    $urlRouterProvider
        .otherwise('/');
});

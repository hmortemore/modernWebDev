angular.module('app', ['ngMaterial', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/plan-party', {
            templateUrl: 'pages/planParty.html',
            controller: 'planPartyController'
        })
        .when('/view-parties', {
            templateUrl: 'pages/viewParties.html',
            controller: 'viewPartiesController'
        })
        .otherwise({
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
})

angular.module('app').controller('mainController', ['$scope', function ($scope) {

}]);

// Plan party controller
angular.module('app').controller('planPartyController', ['$scope', function ($scope) {

}]);

// View parties controller
angular.module('app').controller('viewPartiesController', ['$scope', function ($scope) {

}]);

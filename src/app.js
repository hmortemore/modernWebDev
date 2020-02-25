var app = angular.module('app', ['ngMaterial', 'ngRoute']);

// Routing
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

// Main controller
angular.module('app').controller('mainController', ['$scope', function ($scope) {

}]);

// Plan party controller
angular.module('app').controller('planPartyController', ['$scope', function ($scope) {
    $scope.name = '';
    $scope.description = '';
    $scope.date = '';
    $scope.time = '';
    $scope.address = '';

    // currently just logs all user input when submit is clicked
    $scope.submitParty = function(){
        console.log("name: ", $scope.name);
        console.log("description: ", $scope.description);
        console.log("date: ", $scope.date);
        console.log("time: ", $scope.time);
        console.log("address: ", $scope.address);
    }
}]);

// View parties controller
angular.module('app').controller('viewPartiesController', ['$scope', 'partyService', function ($scope, partyService) {
    // returns parties JSON
    partyService.getParties().then(function (result) {
                console.log('works');
                console.log(result.data);
                $scope.parties = result.data
        	})
        	.catch(function (data, status) {
                console.log(data);
        	});
}]);

// Party Service - retrieves party JSON from database
app.service('partyService', ['$http', function($http){
	this.getParties = function(){
		return $http.get('database.json')
	}
}]);

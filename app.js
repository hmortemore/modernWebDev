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

}]);

// View parties controller
angular.module('app').controller('viewPartiesController', ['$scope', 'partyService', function ($scope, partyService) {
    partyService.getParties().then(function (result) {
                console.log('works');
                //$scope.result = result;
                console.log(result.data);
                $scope.parties = result.data
        	})
        	.catch(function (data, status) {
                console.log(data);
        	});
}]);

// Party Service
app.service('partyService', ['$http', function($http){
	this.getParties = function(){
		return $http.get('database.json')
    	    
//        console.log('response = ', response);
//        return response;
	}
}]);

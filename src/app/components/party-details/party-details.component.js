var partyDetails = {
  templateUrl: './party-details.html',
  controller: 'PartyDetailsController',
};

angular
  .module('party-details')
  .component('partyDetails', partyDetails)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('party-details', {
        url: '/party-details',
        component: 'partyDetails',
        parent: 'app'
      });
    $urlRouterProvider.otherwise('/app/');
  });

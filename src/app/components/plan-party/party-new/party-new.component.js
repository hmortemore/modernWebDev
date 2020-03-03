var partyNew = {
  templateUrl: './party-new.html',
  controller: 'PartyNewController'
};

angular
  .module('plan-party')
  .component('partyNew', partyNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('party-new', {
        url: '/party-new',
        component: 'partyNew',
        parent: 'app'
      });
  });
var partyNew = {
  templateUrl: './party-new.html',
  controller: 'PartyNewController'
};

angular
  .module('components.plan')
  .component('partyNew', partyNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('party-new', {
        url: '/party-new',
        component: 'partyNew'
      });
  });
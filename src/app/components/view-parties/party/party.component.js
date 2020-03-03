var party = {
  bindings: {
    party: '<'
  },
  templateUrl: './party.html',
  controller: 'PartyController',  
};

angular
  .module('view-parties')
  .component('party', party);
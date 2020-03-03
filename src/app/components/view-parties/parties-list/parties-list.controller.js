function PartiesListController(PartyService) {
  var ctrl = this;
  PartyService.getParties().then(function(result){
    ctrl.parties = result.data;
  });
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
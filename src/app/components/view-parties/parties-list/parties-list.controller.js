function PartiesListController(PartyModel) {
  var ctrl = this;
  ctrl.$onInit = () => {
      PartyModel.getParties().then(function(result){
      ctrl.parties = result.data;
    });
  }
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
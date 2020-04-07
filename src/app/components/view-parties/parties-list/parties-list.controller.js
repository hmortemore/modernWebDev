function PartiesListController(PartyModel) {
  var ctrl = this;
  ctrl.$onInit = function(){
    PartyModel.getAll().then(function(results){
      ctrl.parties = results;
    });
  }
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
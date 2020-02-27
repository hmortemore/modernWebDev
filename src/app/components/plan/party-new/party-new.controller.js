function PartyNewController() {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.party = {
      name: '',
      description: '',
      date: '',
      time: '',
      address: '',
    };
  };
}

angular
  .module('components.plan')
  .controller('PartyNewController', PartyNewController);
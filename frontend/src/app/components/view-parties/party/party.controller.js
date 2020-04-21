function PartyController() {
  var ctrl = this;

  this.togglePaymentWindow = ($event) => {
    $event.currentTarget.nextSibling.nextSibling.classList.toggle('hidden');
  } 
}

angular
  .module('view-parties')
  .controller('PartyController', PartyController);
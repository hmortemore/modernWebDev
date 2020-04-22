function PartyController() {
  var ctrl = this;

  this.togglePaymentWindow = () => {
    document.getElementsByClassName('payment-wrapper')[0].classList.toggle('hidden');
  } 
}

angular
  .module('view-parties')
  .controller('PartyController', PartyController);
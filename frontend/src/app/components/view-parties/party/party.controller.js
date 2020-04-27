function PartyController($scope) {
  var ctrl = this;

  this.openPaymentWindow = () => {
    document.getElementsByClassName('payment-modal')[0].classList.remove('hidden');
    document.getElementsByClassName('page-mask')[0].classList.remove('hidden');
    $scope.$emit('buyTicket', this.party.attributes);
  } 
}

angular
  .module('view-parties')
  .controller('PartyController', PartyController);
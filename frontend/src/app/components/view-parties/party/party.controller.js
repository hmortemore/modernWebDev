function PartyController($scope) {
  var ctrl = this;

  this.openPaymentWindow = () => {
    document.getElementsByClassName('payment-modal')[0].classList.remove('hidden');
    document.getElementsByClassName('page-mask')[0].classList.remove('hidden');
    $scope.$emit('buyTicket', this.party.attributes);
  } 

  this.getTimeFormat = function (partyTime){
    var hour = (partyTime.getHours()+4) % 12;
    var minutes = partyTime.getMinutes() < 10
      ? "0"+partyTime.getMinutes()
      : partyTime.getMinutes();
    return hour + ":" + minutes + (partyTime.getHours()+4 > 12
      ? " P.M."
      : " A.M.");
  }
}

angular
  .module('view-parties')
  .controller('PartyController', PartyController);
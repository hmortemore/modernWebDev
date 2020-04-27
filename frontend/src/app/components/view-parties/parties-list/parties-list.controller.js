function PartiesListController(PartyModel, $http, $scope) {
  var ctrl = this;

  ctrl.selectedParty = {};

  let button = document.querySelector('#submit-payment-button');

  ctrl.$onInit = function(){
    PartyModel.getAll().then(function(results){
      ctrl.parties = results;
    });

    $http.get('http://localhost:1337/payment/client_token').then(function(response) {
      const CLIENT_TOKEN_FROM_SERVER = response.data;

      braintree.dropin.create({
        authorization: CLIENT_TOKEN_FROM_SERVER,
        selector: '#dropin-container'
      }, function (err, instance) {
        button.addEventListener('click', function () {
          instance.requestPaymentMethod(function (err, payload) {
            let data = {
              nonce: payload.nonce,
              party: ctrl.selectedParty
            };
            $http.post('http://localhost:1337/payment/nonce', data).then(function (response) {

              window.alert(`Successful payment of $${ctrl.selectedParty.entryFee} for ${ctrl.selectedParty.name}`);
              ctrl.closePaymentWindow();

            }, function (response) {
            
              window.alert('Unsuccessful payment. Please refresh and try again.');
              ctrl.closePaymentWindow();
            
            });
          });
        })
      });
    });
  }

  $scope.$on('buyTicket', function(event, data) {
    ctrl.selectedParty = data;
  });

  this.closePaymentWindow = () => {
    document.getElementsByClassName('payment-modal')[0].classList.add('hidden');
    document.getElementsByClassName('page-mask')[0].classList.add('hidden');
    $scope.$emit('buyTicket', {});
  }
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
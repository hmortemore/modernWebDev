function PartiesListController(PartyModel, $http) {
  var ctrl = this;

  ctrl.$onInit = function(){
    PartyModel.getAll().then(function(results){
      ctrl.parties = results;
    });

    $http.get('http://localhost:1337/payment/client_token').then(function(response) {
      console.log('client token: ' , response.data);
      const CLIENT_TOKEN_FROM_SERVER = response.data;
      var button = document.querySelector('#submit-button');

      braintree.dropin.create({
        authorization: CLIENT_TOKEN_FROM_SERVER,
        selector: '#dropin-container'
      }, function (err, instance) {
        button.addEventListener('click', function () {
          instance.requestPaymentMethod(function (err, payload) {
            // send payload.nonce to your server
            console.log('Nonce: ', payload.nonce);
          });
        })
      });
    });

  }
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
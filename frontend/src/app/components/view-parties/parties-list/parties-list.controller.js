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
            $http.post('http://localhost:1337/payment/nonce', {nonce: payload.nonce}).then(function (response) {

              // This function handles success
              
              }, function (response) {
              
              // this function handles error
              
              });
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
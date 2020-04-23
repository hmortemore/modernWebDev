function PartiesListController(PartyModel) {
  var ctrl = this;

  ctrl.$onInit = function(){
    PartyModel.getAll().then(function(results){
      ctrl.parties = results;
    });

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8080/client_token', true);

    xhr.send();

    xhr.onload = function() {
      if (xhr.status != 200) { 
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        console.log('Response: ', xhr.response);
        const CLIENT_TOKEN_FROM_SERVER = xhr.response;

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
      }
    };
  }
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
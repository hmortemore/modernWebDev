function PartiesListController(PartyModel) {
  var ctrl = this;

  ctrl.$onInit = function(){
    PartyModel.getAll().then(function(results){
      ctrl.parties = results;
    });
  }

  /* var button = document.querySelector('#submit-button');

  braintree.dropin.create({
    authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
    selector: '#dropin-container'
  }, function (err, instance) {
    button.addEventListener('click', function () {
      instance.requestPaymentMethod(function (err, payload) {
        // Submit payload.nonce to your server
      });
    })
  });

  this.submitPayyment = function(err, instance) {
    instance.requestPaymentMethod(function (err, payload) {
      // Submit payload.nonce to your server
    });
  } */
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);
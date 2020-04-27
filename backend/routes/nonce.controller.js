const braintree = require("braintree");

const nonce = {
  'create': createNonce
}

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "ytkkgg7g4vbs9gbq",
  publicKey: "728y26ysj56pkm22",
  privateKey: "338a5ccd502216b412d782b03cb4c724"
});

function createNonce(req, res) {
  var nonceFromTheClient = req.body.nonce;

  gateway.transaction.sale({
    amount: req.body.party.entryFee,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    result.success ? res.status(200).send() : res.status(400).send();
  });
}

module.exports = nonce;
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
  console.log(nonceFromTheClient);

  gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    console.log(result.transaction.status);
    console.log(err);
  });
}

module.exports = nonce;
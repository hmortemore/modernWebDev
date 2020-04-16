// Install and configure
var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "ytkkgg7g4vbs9gbq",
  publicKey: "728y26ysj56pkm22",
  privateKey: "338a5ccd502216b412d782b03cb4c724"
});

// 
gateway.clientToken.generate({
  customerId: aCustomerId
}, function (err, response) {
  var clientToken = response.clientToken
});

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

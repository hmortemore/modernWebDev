var braintree = require("braintree");
const express = require('express');

const app = express();

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "ytkkgg7g4vbs9gbq",
  publicKey: "728y26ysj56pkm22",
  privateKey: "338a5ccd502216b412d782b03cb4c724"
});

//Send a client token to your client
app.get("/client_token", function (req, res) {
 gateway.clientToken.generate({}, function (err, response) {
   res.send(response.clientToken);
 });
});

//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
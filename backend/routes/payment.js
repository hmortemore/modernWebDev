const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();

// controller modules
const ClientTokenController = require('./client-token.controller');
console.log(ClientTokenController.read);

// security (CORS)
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS ");
  next();
});

// routes
router.get("/client_token", ClientTokenController.read);

module.exports = router;
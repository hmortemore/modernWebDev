const express = require('express');

const app = express();

// custom routes
const payment = require('./routes/payment');

// base route
app.get('/', (req, res) => {
  res.status(200).send('Base route :)');
});

// register custom routes
app.use('/payment', payment);

const port = process.env.PORT || 1337;

const httpServer = require('http').createServer(app);

httpServer.listen(port, () => {
  console.log('Listening on port ' + port);
});
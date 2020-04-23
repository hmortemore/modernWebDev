const express = require('express');

const app = express();

// custom routes
const image = require('./routes/image');

// base route
app.get('/', (req, res) => {
  res.status(200).send('I dream of being a website.');
});

// register custom routes
app.use('/image', image);

const port = process.env.PORT || 1337;

const httpServer = require('http').createServer(app);

httpServer.listen(port, () => {
  console.log('Listening on port ' + port);
});

// This stuff goes in a routes folder
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();

// requires controller modules
const SizeController = require('./size.controller');
const ColorController = require('./color.controller');

// security (CORS)
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS ");
  next();
});

router.get('/size', SizeController.read);

router.post('/color/grayscale', jsonParser, ColorController.create);

module.exports = router;


// size.controller.js
const size = {
  'read': readImage
}

function readImage(req, res) {
  if (res.success){

  } else {

  }
}
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;
  mongoose = require('mongoose');
  Card = require('./api/models/flashcardModel');
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/flashcarddb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/flashcardRoutes'); //imports routes
routes(app); //registers routes

app.listen(port);

console.log('flashcard api server started on port' + port);

var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;
  mongoose = require('mongoose');
  Card = require('./api/models/rodoListModel');
  bodyParser = require('body-parser');




app.listen(port);

console.log('flashcard api server started on port' + port);

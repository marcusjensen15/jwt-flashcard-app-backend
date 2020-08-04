//this file is called index.js in jwt tutorial.

var express = require('express');

const app = express();
  port = process.env.PORT || 4000;
  mongoose = require('mongoose');
  Card = require('./api/models/flashcardModel');
  User = require('./api/models/userModel');
  bodyParser = require('body-parser');

//Auth Route

const authRoute = require('./api/routes/auth');

//Card Routes

const cardRoutes = require('./api/routes/index');

//Post Route

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/flashcarddb');

//Using bodyParser.json is the modern way of doing this (express.json() is the outdated way)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//imports routes

// var routes = require('./api/routes/index');


// routes(app);


//Below is experimental

//Register routes

app.use('/api/user', authRoute);

app.use('/data', cardRoutes);





//Above is experiemental




app.listen(port);

console.log('flashcard api server started on port' + port);

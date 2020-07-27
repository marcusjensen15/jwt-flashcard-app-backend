module.exports = function(app){
  var flashcards = require('../controllers/flashcardController');
  var user = require('../controllers/userController');
  // var userController = require('../controllers/userController');

  //flashcard routes
  app.route('/cards')
    .get(flashcards.list_all_cards)
    .post(flashcards.create_a_card);


  app.route('/cards/:cardId')
    .get(flashcards.read_a_card)
    .put(flashcards.update_a_card)
    .delete(flashcards.delete_a_card);

  //auth routes

  // app.use("/auth", require("./auth"));

  app.route('/auth/register')
    .post(user.create_a_user)
    .get(user.list_all_users);



};

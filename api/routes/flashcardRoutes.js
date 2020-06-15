module.exports = function(app){
  var flashcards = require('../controllers/flashcardController');

  //flashcard routes
  app.route('/cards')
    .get(flashcards.list_all_cards)
    .post(flashcards.create_a_card);


  app.route('/cards/:cardId')
    .get(flashcards.read_a_card)
    .put(flashcards.update_a_card)
    .delete(flashcards.delete_a_card);


};

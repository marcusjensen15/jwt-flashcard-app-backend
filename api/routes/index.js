
// module.exports = function(app){
  // var flashcards = require('../controllers/flashcardController');
  const router = require('express').Router();
  const { list_all_cards } = require('../controllers/flashcardController');

  router.get('/cards', (req,res) => {
    // Card.find({}, function(err, card){
    //   if (err)
    //   res.send(err);
    //   res.json(card);
    // });
    list_all_cards(req,res);
  })
  // var user = require('../controllers/userController');
  // var userController = require('../controllers/userController');

  //flashcard routes
  // app.route('/cards')
  //   .get(flashcards.list_all_cards)
  //   .post(flashcards.create_a_card);


  // app.route('/cards/:cardId')
  //   .get(flashcards.read_a_card)
  //   .put(flashcards.update_a_card)
  //   .delete(flashcards.delete_a_card);

  //auth routes

  // app.use("/auth", require("./auth"));

  // app.route('/register')
  //   .post(user.create_a_user);
  //
  // app.route('/users')
  //   .get(user.list_all_users);
  //
  // app.route('/users/:userId')
  //   .get(user.read_a_user)
  //   .delete(user.delete_a_user)
  //   .put(user.update_a_user);


// };

module.exports = router;

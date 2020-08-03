
// module.exports = function(app){
  // var flashcards = require('../controllers/flashcardController');
  const router = require('express').Router();
  const { list_all_cards, create_a_card, read_a_card, update_a_card, delete_a_card } = require('../controllers/flashcardController');
    const { list_all_users, create_a_user, read_a_user, update_a_user, delete_a_user } = require('../controllers/userController');

  router.get('/cards', (req,res) => {
    list_all_cards(req,res);
  });

  router.post('/cards', (req,res) => {
    create_a_card(req,res);
  });

  router.get('/cards/:cardId', (req,res) => {
    read_a_card(req,res);
  });

  router.put('/cards/:cardId', (req,res) => {
    update_a_card(req,res);
  });

  router.delete('/cards/:cardId', (req,res) => {
    delete_a_card(req,res);
  });

  //User routes

  router.get('/users', (req,res) => {
    list_all_users(req,res);
  });

  router.post('/users', (req,res) => {
    create_a_user(req,res);
  });

  router.get('/users/:userId', (req,res) =>{
    read_a_user(req,res);
  });
  router.delete('/users/:userId', (req,res) =>{
    delete_a_user(req,res);
  });
  router.put('/users/:userId', (req,res) =>{
    update_a_user(req,res);
  });



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

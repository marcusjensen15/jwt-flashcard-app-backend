

  const router = require('express').Router();
  const { list_all_cards, create_a_card, read_a_card, update_a_card, delete_a_card } = require('../controllers/flashcardController');
  const { list_all_users, create_a_user, read_a_user, update_a_user, delete_a_user } = require('../controllers/userController');
  const verify = require('./verifyToken');

  router.get('/cards', verify, (req,res) => {
    list_all_cards(req,res);
  });

  router.post('/cards', verify, (req,res) => {
    create_a_card(req,res);
  });

  router.get('/cards/:cardId', verify, (req,res) => {
    read_a_card(req,res);
  });

  router.put('/cards/:cardId', verify, (req,res) => {
    update_a_card(req,res);
  });

  router.delete('/cards/:cardId', verify, (req,res) => {
    delete_a_card(req,res);
  });

  //User routes
  //Will need to write a special middleware to verify admins

  router.get('/users', verify, (req,res) => {
    list_all_users(req,res);
  });

  router.get('/users/:userId', verify, (req,res) =>{
    read_a_user(req,res);
  });
  router.delete('/users/:userId', verify, (req,res) =>{
    delete_a_user(req,res);
  });
  router.put('/users/:userId', verify, (req,res) =>{
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

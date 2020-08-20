

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


module.exports = router;

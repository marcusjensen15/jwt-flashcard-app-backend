const router = require('express').Router();
const User = require('../models/userModel');
const {registerValidation, loginValidation} = require('../../validation');

router.post('/register', (req,res) => {
  res.send('hi from auth.js');
});

// router.route('/register')
//   .post(userController.create_a_user);
// router.get('/register', (req,res) => {
//   res.send('Register get route');
// });


module.exports = router;

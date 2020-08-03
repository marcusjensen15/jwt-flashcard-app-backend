const router = require('express').Router();
const User = require('../models/userModel');
const {registerValidation, loginValidation} = require('../../validation');
  const { create_a_user } = require('../controllers/userController');

router.post('', (req,res) => {
  create_a_user(req,res);
});



module.exports = router;

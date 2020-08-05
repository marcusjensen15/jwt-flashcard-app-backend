const router = require('express').Router();
const User = require('../models/userModel');
const {registerValidation, loginValidation} = require('../../validation');
const { create_a_user } = require('../controllers/userController');
const bcrypt = require('bcryptjs');

router.post('/register', async (req,res) => {
  const error = registerValidation(req.body);

  if(error.error) return res.status(400).send(error.error.details[0].message);

  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('this email already exists');

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  res.send(hashPassword);

  // create_a_user(req,res);

});





module.exports = router;

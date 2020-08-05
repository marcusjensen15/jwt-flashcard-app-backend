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

  create_a_user(req,res);

});

//login route below hasn't been tested

router.post('/login', async (req,res) => {

  const error = loginValidation(req.body);

  if(error.error) return res.status(400).send(error.error.details[0].message);

    //Check if email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email does not exist');

    //Check if password is correct using bcrypt compare function.
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    res.send('logged in');



});





module.exports = router;

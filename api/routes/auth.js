const router = require('express').Router();
const User = require('../models/userModel');
const {registerValidation, loginValidation} = require('../../validation');
  const { create_a_user } = require('../controllers/userController');

// router.post('', (req,res) => {
//   create_a_user(req,res);
// });

//below is experimental

router.post('', async (req,res) => {
  const error = registerValidation(req.body);

  if(error.error) return res.status(400).send(error.error.details[0].message);

  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('this email already exists');

  create_a_user(req,res);

});



module.exports = router;

const router = require('express').Router();
// var userController = require('../controllers/userController');
var user = require('../model/userModel');

router.post('/register', (req,res) => {
  // res.send('Register');
  user.create_a_user;
});

// router.route('/register')
//   .post(userController.create_a_user);
router.get('/register', (req,res) => {
  res.send('Register get route');
});


module.exports = router;

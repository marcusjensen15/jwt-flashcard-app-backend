const router = require('express').Router();
// var userController = require('../controllers/userController');
// var User = require('../model/userModel');

router.post('/register', (req,res) => {
  res.send('Register');
});

// router.route('/register')
//   .post(userController.create_a_user);
router.get('/register', (req,res) => {
  res.send('Register get route');
});


module.exports = router;

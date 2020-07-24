var mongoose = require('mongoose');
  User = mongoose.model('Users');

exports.create_a_user = function(req,res){
  new_user = new User({
    email: req.body.email,
    password: req.body.password}
  );
  new_user.save(function(err, user){
    if (err)
      res.send(err);
    res.json(user);
  });
};

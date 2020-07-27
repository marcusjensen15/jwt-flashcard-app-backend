var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.create_a_user = function(req,res){
  var new_user = new User(req.body);
  new_user.save(function(err, user){
    if (err)
      res.send(err);
    res.json(user);
  });
};

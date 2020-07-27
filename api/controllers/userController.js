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

exports.list_all_users = function(req,res){
  User.find({}, function(err, users){
    if (err)
      res.send(err);
      res.json(users);
  });
};

exports.read_a_user = function(req,res){
  Card.findById(req.params.userId, function(err, user){
    if (err)
      res.send(err);
    res.json(user);
  });
};

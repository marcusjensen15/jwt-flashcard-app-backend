var mongoose = require('mongoose'),
  User = mongoose.model('User');

 const create_a_user = (req,res) => {
  var new_user = new User(req.body);
  new_user.save(function(err, user){
    if (err)
      res.send(err);
    res.json(user);
  });
};

const list_all_users = (req,res) => {
  User.find({}, function(err, users){
    if (err)
      res.send(err);
      res.json(users);
  });
};

const read_a_user = (req,res) => {
  User.findById(req.params.userId, function(err, user){
    if (err)
      res.send(err);
    res.json(user);
  });
};

const delete_a_user = (req,res) => {
  User.remove({
    _id: req.params.userId}, function(err, user){
      if (err)
        res.send(err)
        res.json({message: "this user has been deleted"});
  });
};

const update_a_user = (req,res) => {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true}, function(err,user){
    if(err)
      res.send(err);
    res.json(user);
  });
};

module.exports.list_all_users = list_all_users;
module.exports.create_a_user = create_a_user;
module.exports.read_a_user = read_a_user;
module.exports.update_a_user = update_a_user;
module.exports.delete_a_user = delete_a_user;

var mongoose = require('mongoose'),
  Card = mongoose.model('Cards');

  exports.list_all_cards = function(req,res){
    Card.find({}, function(err, card){
      if (err)
      res.send(err);
      res.json(card);
    });
  };


  exports.create_a_card = function(req,res){
    var new_card = new Card(req.body);
    new_card.save(function(err, card){
      if (err)
        res.send(err);
      res.json(card);
    });
  };

  exports.update_a_card = function(req,res){
    Card.findOneAndUpdate({_id: req.params.taskId}, req.body, {new:true}, function(err, task){
      if(err)
        res.send(err);
      res.json(card);
    });
  };

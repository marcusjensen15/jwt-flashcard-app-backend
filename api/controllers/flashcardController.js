var mongoose = require('mongoose');
  Card = mongoose.model('Cards');

const list_all_cards = (req,res) => {
    Card.find({}, function(err, card){
      if (err)
      res.send(err);
      res.json(card);
    });
  };


  const create_a_card = (req,res) => {
    var new_card = new Card(req.body);
    new_card.save(function(err, card){
      if (err)
        res.send(err);
      res.json(card);
    });
  };

  const read_a_card = (req,res) => {
    Card.findById(req.params.cardId, function(err, card){
      if (err)
        res.send(err);
      res.json(card);
    });
  };

  exports.update_a_card = function(req,res){
    Card.findOneAndUpdate({_id: req.params.cardId}, req.body, {new:true}, function(err, card){
      if(err)
        res.send(err);
      res.json(card);
    });
  };


  exports.delete_a_card = function(req,res){
    Card.remove({
      _id: req.params.cardId}, function(err, card){
        if (err)
          res.send(err);
          res.json({ message: "card has been deleted"});
    });
  };


module.exports.list_all_cards = list_all_cards;
module.exports.create_a_card = create_a_card;
module.exports.read_a_card = read_a_card;

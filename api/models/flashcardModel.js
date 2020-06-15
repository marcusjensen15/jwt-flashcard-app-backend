var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  cardFront: {
    type: String,
    required: 'add a front of card'
  },
  cardBack: {
    type: String,
    required: 'add a back of card'
  },
  cardDeck: {
    type: String,
    required: 'add a deck to this card'
  },
  user: {
    type: String
  }
});

module.exports = mongoose.model('Cards', CardSchema);

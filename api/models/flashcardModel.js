var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// removing: required: 'message from each card to see what happens'

var CardSchema = new Schema({
  cardFront: {
    type: String

  },
  cardBack: {
    type: String

  },
  cardDeck: {
    type: String

  },
  user: {
    type: String
  }
});

module.exports = mongoose.model('Cards', CardSchema);

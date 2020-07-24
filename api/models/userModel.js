var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// removing: required: 'message from each card to see what happens'

var UserSchema = new Schema({
  email: {
    type: String

  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);

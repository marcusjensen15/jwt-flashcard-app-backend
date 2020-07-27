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

//export model

const User = mongoose.model('User', UserSchema);

module.exports = User;

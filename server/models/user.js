const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BoardSchema = require("./board");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true,'Name field is required']
  },
  password:{
    type: String,
    required: [true,'Password field is required']
  },
  boards: [BoardSchema]
});

const User = mongoose.model('user',UserSchema);
module.exports = User;
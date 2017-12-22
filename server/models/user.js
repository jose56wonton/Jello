const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Board = require("./board");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true,'Name field is required']
  },
  password:{
    type: String,
    required: [true,'Password field is required']
  },
  boards: {
    type: mongoose.Schema.ObjectId,
    ref: 'boards',
    required: [true,'Password field is required']
  }
});

const User = mongoose.model('user',UserSchema);
module.exports = User;
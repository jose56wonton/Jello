const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const List = require('./list');

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  description: {
    type: String,
    required: [true,'Description field is required']
  },
  lists: {
    type: mongoose.Schema.ObjectId,
    ref: 'boards'
  }
});

const Board = mongoose.model('board',BoardSchema);
module.exports = Board;
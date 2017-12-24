const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ListSchema = require('./list');

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  description: {
    type: String,
    required: [true,'Description field is required']
  },
  lists: [ListSchema]
});
module.exports = BoardSchema;
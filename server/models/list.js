const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = require('./task');

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  tasks: [TaskSchema]
});

module.exports = ListSchema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  completed: Boolean
});

module.exports = TaskSchema;
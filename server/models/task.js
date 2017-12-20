const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  completed: false
});

const Task = mongoose.model('task',TaskSchema);
module.exports = Task;
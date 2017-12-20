const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Task = require('./task');

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  tasks: [Task]
});

const List = mongoose.model('list',ListSchema);
module.exports = List;
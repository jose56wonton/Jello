var express = require("express");
var app = express();
var port = 3001;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/jello-server");
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', require('./routes/user_routes'));
app.use('/api',require('./routes/board_routes'));
app.use('/api',require('./routes/list_routes'));
app.use('/api',require('./routes/task_routes'));
app.use((err,req,res,next) => {
  res.status(422).send({error: err.message});
})

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
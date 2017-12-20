var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/jello-server");
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use((err,req,res,next) => {
  res.status(422).send({error: err.message});
})

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
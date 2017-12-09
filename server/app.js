var express = require("express");
var app = express();
var port = 9898;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/jello-server");

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

var User = mongoose.model("User", nameSchema);
app.post("/addname", (req,res) =>{
  var myData = new User(req.body);
  myData.save()
  .then(item =>{
    res.send("item saved to database");
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", (req,res) => {
  res.sendfile(__dirname + "/index.html");
});
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
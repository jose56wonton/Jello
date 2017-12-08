var express = require("express");
var app = express();
var port = 5656;
app.get("/", (req,res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
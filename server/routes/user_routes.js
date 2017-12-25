const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/users', (req, res, next) => {
  User.create(req.body).then((user) => {
    res.send(user);
  }).catch(next);
})
router.get('/users/:name', (req, res, next) => {
  var promise = User.findOne({ "name": req.params.name }).exec();
  promise.then((user) =>{
    res.send(user);
  })
  .catch((err) =>{
    console.log("Error: ",err);
  })
})

router.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then((user) => {
    User.findOne({ _id: req.params.id }).then((user) => {
      res.send(user);
    })
  })
})

router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
    res.send(user);
  })
})

module.exports = router;
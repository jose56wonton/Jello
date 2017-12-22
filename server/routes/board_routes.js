const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/board', (req, res, next) => {
   User.find().then((user) =>{
    res.send(user);
  })
})

router.post('/board', (req, res, next) => {
   console.log(req.body);
  User.create(req.body).then((user) => {      
    res.send(user);
  }).catch(next);
})

router.put('/board/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id:req.params.id},req.body).then((user)=>{
        User.findOne({_id:req.params.id}).then((user)=>{
      res.send(user);
    })
  })
})

router.delete('/board/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).then((user)=>{
    res.send(user);
  })
})

module.exports = router;
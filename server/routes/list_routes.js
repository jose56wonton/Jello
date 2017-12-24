const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Board = require('../models/board');
const List = require('../models/list');

router.post('/lists', (req, res, next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {
    const l = {title: req.body.title}    
    user.boards.id(req.body.board_id).lists.push(l);    
    user.save().then(() => {
      res.send(user);
    }).catch((err) => {

    })
  })
})
router.delete('/lists/:id', (req, res, next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {    
    user.boards.id(req.body.board_id).lists.find((ele) => {
      return ele._id ==req.params.id
    }).remove();
    user.save().then((user) => {
      res.send(user);
    }).catch((err)=>{
      // dunnon what to do yet
    })
  })
})
module.exports = router;
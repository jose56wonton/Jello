const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Board = require('../models/board');
const List = require('../models/list');

router.post('/tasks', (req, res, next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {
    const t = {title: req.body.title,
               completed: false}    
    user.boards.id(req.body.board_id)
        .lists.id(req.body.list_id).tasks.push(t);    
    user.save().then(() => {
      res.send(user);
    }).catch((err) => {
    })
  })
})
router.put('/tasks/:id', (req,res,next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {    
    var t = user.boards.id(req.body.board_id)
        .lists.id(req.body.list_id).tasks.find((ele) => {
      return ele._id ==req.params.id
    });
    t.completed = req.body.completed;
    user.save().then((user) => {
      res.send(user);
    }).catch((err)=>{
      // dunnon what to do yet
    })
  })
})
router.delete('/tasks/:id', (req, res, next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {    
    user.boards.id(req.body.board_id)
        .lists.id(req.body.list_id).tasks.find((ele) => {
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
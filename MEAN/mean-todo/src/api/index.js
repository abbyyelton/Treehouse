'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res) {
  //res.send('These are the todos');
  Todo.find({}, function(err, todos) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json({todos: todos});
    }
  });
});

router.post('/todos', function(req, res) {
  var todo = req.body;
  res.send(todo);
})

module.exports = router;

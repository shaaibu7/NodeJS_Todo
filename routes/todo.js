const express = require('express');
const router = express.Router();
const todo = require('../controller/todo')


router.get('/', todo.homeController);

router.get('/add-todo', todo.addTodoFormController);

router.get('/update-todo', todo.updateTodoFormController);

router.get('/delete-todo', todo.deleteTodoPageController);

// add todo

router.post('/add-todo', todo.addTodoController);

router.post('/update-todo/:id', todo.updateController)

router.get('/confirm-delete', todo.deleteTodoController)

module.exports = router;
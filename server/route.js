const express = require('express');
var router = express.Router();
var todo = require('./controllers/todoCtrl');

//defining the routes for todo's list
router.get('/todos/',todo.fetchAll);
router.post('/todos/',todo.create);
router.put('/todos/:id',todo.update);
router.delete('/todos/:id',todo.delete);

module.exports = router;
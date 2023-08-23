const express = require('express');
const middleware = require('./items.middleware');
const controller = require('./items.controller');

const router = express.Router();



//GET STUDENTS
router.get('/', controller.GetItems);
//POST STUDENTS
router.post('/', controller.CreateItem);
// GET UPDATE ONE ITEM BY ID
router.patch('/:id', controller.UpdateItem);
// GET ONE STUDENT ID
router.get('/:id', controller.GetOneItem);
// DELETE ONE ITEM BY ID
router.delete('/:id', controller.DeleteItem);

module.exports = router;
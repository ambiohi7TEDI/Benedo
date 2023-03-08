const express = require('express');
const ejs = require('ejs');

const router = express.Router();
const userController = require('controllers/userCountroller');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
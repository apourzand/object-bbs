const express = require('express');
const userController = require('../controllers/user');
const roleController = require('../controllers/role');

const router = express.Router();

//User
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUser);

//Role
router.get('/role', roleController.getRoles);
router.get('/role/:id', roleController.getRole);

module.exports = router;
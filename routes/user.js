const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()

//User
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.addUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router
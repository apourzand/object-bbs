const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()

//User
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)

module.exports = router
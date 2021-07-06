const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

//Auth
router.post('/', authController.login)


module.exports = router
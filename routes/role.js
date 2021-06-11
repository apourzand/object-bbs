const express = require('express')
const roleController = require('../controllers/role')

const router = express.Router()

//Role
router.get('/', roleController.getRoles)
router.get('/:id', roleController.getRole)

module.exports = router
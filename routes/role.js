const express = require('express')
const roleController = require('../controllers/role')

const router = express.Router()

//Role
router.get('/', roleController.getRoles)
router.get('/:id', roleController.getRole)
router.post('/', roleController.addRole)
router.put('/:id', roleController.updateRole)
router.delete('/:id', roleController.deleteRole)

module.exports = router
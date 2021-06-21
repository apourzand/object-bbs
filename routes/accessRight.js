const express = require('express')
const accessRightController = require('../controllers/accessRight')

const router = express.Router()

//AccessRight
router.get('/', accessRightController.getAccessRights)
router.get('/:id', accessRightController.getAccessRight)
router.post('/', accessRightController.addAccessRight)
router.put('/:id', accessRightController.updateAccessRight)
router.delete('/:id', accessRightController.deleteAccessRight)

module.exports = router
const express = require('express')
const accessProfileController = require('../controllers/accessProfile')

const router = express.Router()

//AccessProfile
router.get('/', accessProfileController.getAccessProfiles)
router.get('/:id', accessProfileController.getAccessProfile)
router.post('/', accessProfileController.addAccessProfile)
router.put('/:id', accessProfileController.updateAccessProfile)
router.delete('/:id', accessProfileController.deleteAccessProfile)

module.exports = router
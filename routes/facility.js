const express = require('express')
const facilityController = require('../controllers/facility')

const router = express.Router()

//Facility
router.get('/', facilityController.getFacilitys)
router.get('/:id', facilityController.getFacility)
router.post('/', facilityController.addFacility)
router.put('/:id', facilityController.updateFacility)
router.delete('/:id', facilityController.deleteFacility)

module.exports = router
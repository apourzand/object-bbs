const facilityService = require('../services/facility')

class FacilityController {
  async getFacilitys(req, res, next) {
    try {
      const facilitys = await facilityService.getFacilitys()
      res.json(facilitys)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async getFacility(req, res, next) {
    try {
      const facility = await facilityService.getFacility(req.params.id)
      res.json(facility)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async addFacility(req, res, next) {
    try {
      const facility = await facilityService.addFacility(req.body)
      res.json(facility)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async updateFacility(req, res, next) {
    try {
      const facility = await facilityService.updateFacility(req.params.id, req.body)
      res.json(facility)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async deleteFacility(req, res, next) {
    try {
      const facility = await facilityService.deleteFacility(req.params.id)
      res.json(facility)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new FacilityController()
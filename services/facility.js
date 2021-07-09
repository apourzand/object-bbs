const facilityDAO = require('../dao/facility')
const raParamParser = require('./raParamParser')

class FacilityService {
  getFacilitys(params) {
    return raParamParser(params, facilityDAO.findAll())
  }

  getFacility(id) {
    return facilityDAO.findById(id)
  }

  addFacility(data) {
    return facilityDAO.add(data)
  }

  updateFacility(id, data) {
    return facilityDAO.update(id, data)
  }

  deleteFacility(id) {
    return facilityDAO.delete(id)
  }

}

module.exports = new FacilityService()
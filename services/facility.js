const facilityDAO = require('../dao/facility')

class FacilityService {
  getFacilitys() {
    return facilityDAO.findAll()
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
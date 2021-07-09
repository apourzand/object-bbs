const accessProfileDAO = require('../dao/accessProfile')
const raParamParser = require('./raParamParser')

class AccessProfileService {
  getAccessProfiles(params) {
    return raParamParser(params, accessProfileDAO.findAll())
  }

  getAccessProfile(id) {
    return accessProfileDAO.findById(id)
  }

  addAccessProfile(data) {
    return accessProfileDAO.add(data)
  }

  updateAccessProfile(id, data) {
    return accessProfileDAO.update(id, data)
  }

  deleteAccessProfile(id) {
    return accessProfileDAO.delete(id)
  }

}

module.exports = new AccessProfileService()
const accessRightDAO = require('../dao/accessRight')

class AccessRightService {
  getAccessRights() {
    return accessRightDAO.findAll()
  }

  getAccessRight(id) {
    return accessRightDAO.findById(id)
  }

  addAccessRight(data) {
    return accessRightDAO.add(data)
  }

  updateAccessRight(id, data) {
    return accessRightDAO.update(id, data)
  }

  deleteAccessRight(id) {
    return accessRightDAO.delete(id)
  }

}

module.exports = new AccessRightService()
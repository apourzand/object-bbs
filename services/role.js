const roleDAO = require('../dao/role')

class RoleService {
  getRoles() {
    return roleDAO.findAll()
  }

  getRole(id) {
    return roleDAO.findById(id)
  }

  addRole(data) {
    return roleDAO.add(data)
  }
}

module.exports = new RoleService()
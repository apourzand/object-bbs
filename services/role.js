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

  updateRole(id, data) {
    return roleDAO.update(id, data)
  }

  deleteRole(id) {
    return roleDAO.delete(id)
  }

}

module.exports = new RoleService()
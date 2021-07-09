const roleDAO = require('../dao/role')
const raParamParser = require('./raParamParser')


class RoleService {
  getRoles(params) {
    
    return raParamParser(params, roleDAO.findAll())
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
const roleDAO = require('../dao/role');

class RoleService {
  getRoles() {
    return roleDAO.findAll();
  }

  getRole(id) {
    return roleDAO.findById(id);
  }
}

module.exports = new RoleService();
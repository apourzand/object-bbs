const Role = require('../models/role');

class RoleDAO {
  findAll() {
    return Role.query();
  }

  findById(id) {
    return Role.query().findById(id);
  }
}

module.exports = new RoleDAO();

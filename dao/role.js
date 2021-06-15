const Role = require('../models/role')

class RoleDAO {
  findAll() {
    return Role.query()
  }

  findById(id) {
    return Role.query().findById(id)
  }

  async add(data) {
    // Add the Role.
    Role.fromJson(data);
    let role = await Role.query().insert(data);

    // return the role object
    return role;
  }

  async update(id, data) {
    // Update the Role.
    const role = await Role.query()
    .patchAndFetchById(id, data);
  
    // return the role object
    return role
  }

  async delete(id) {
    // Delete the Role.
    const numDeleted = await Role.query().deleteById(id);

    // return the numDeleted
    return numDeleted
  }
}

module.exports = new RoleDAO()

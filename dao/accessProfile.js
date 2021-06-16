const AccessProfile = require('../models/accessProfile')

class AccessProfileDAO {
  findAll() {
    return AccessProfile.query()
  }

  findById(id) {
    return AccessProfile.query().findById(id)
  }

  async add(data) {
    // Add the AccessProfile.
    AccessProfile.fromJson(data);
    let accessProfile = await AccessProfile.query().insert(data);

    // return the accessProfile object
    return accessProfile;
  }

  async update(id, data) {
    // Update the AccessProfile.
    const accessProfile = await AccessProfile.query()
    .patchAndFetchById(id, data);
  
    // return the accessProfile object
    return accessProfile
  }

  async delete(id) {
    // Delete the AccessProfile.
    const numDeleted = await AccessProfile.query().deleteById(id);

    // return the numDeleted
    return numDeleted
  }
}

module.exports = new AccessProfileDAO()

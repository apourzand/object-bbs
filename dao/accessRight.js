const AccessRight = require('../models/accessRight')

class AccessRightDAO {
  findAll() {
    return AccessRight.query()
      .withGraphFetched('user')
      .withGraphFetched('facility')
      .withGraphFetched('accessProfile')
  }

  findById(id) {
    return AccessRight.query().findById(id)
      .withGraphFetched('user')
      .withGraphFetched('facility')
      .withGraphFetched('accessProfile')
  }

  async add(data) {
    // Add the AccessRight.
    AccessRight.fromJson(data);
    let accessRight = await AccessRight.query().insert(data);

    // return the accessRight object
    return accessRight;
  }

  async update(id, data) {
    // Update the AccessRight.
    const accessRight = await AccessRight.query()
      .patchAndFetchById(id, data);

    // return the accessRight object
    return accessRight
  }

  async delete(id) {
    // Delete the AccessRight.
    const numDeleted = await AccessRight.query().deleteById(id);

    // return the numDeleted
    return numDeleted
  }

  findByUserId(id) {
    return AccessRight.query().where('userId', id)
  }
}

module.exports = new AccessRightDAO()

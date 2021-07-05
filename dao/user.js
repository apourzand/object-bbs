const User = require('../models/user')

class UserDAO {
  findAll() {
    return User.query().withGraphFetched('role')
  }

  findById(id) {
    return User.query().findById(id).withGraphFetched('role')
  }

  async add(data) {
    // Add the User.
    User.fromJson(data);
    let user = await User.query().insert(data);

    // return the user object
    return user;
  }

  async update(id, data) {
    // Update the User.
    const user = await User.query()
    .patchAndFetchById(id, data);
  
    // return the user object
    return user
  }

  async delete(id) {
    // Delete the user.
    const numDeleted = await User.query().deleteById(id);

    // return the numDeleted
    return numDeleted
  }

  findByEmail(email) {
    return User.query().findOne('email', email).withGraphFetched('role')
  }
}

module.exports = new UserDAO()

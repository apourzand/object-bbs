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
}

module.exports = new UserDAO()

const User = require('../models/user')

class UserDAO {
  findAll() {
    return User.query().withGraphFetched('role')
  }

  findById(id) {
    return User.query().findById(id).withGraphFetched('role')
  }
}

module.exports = new UserDAO()

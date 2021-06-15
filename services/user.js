const userDAO = require('../dao/user')

class UserService {
  getUsers() {
    return userDAO.findAll()
  }

  getUser(id) {
    return userDAO.findById(id)
  }

  addUser(data) {
    return userDAO.add(data)
  }

}

module.exports = new UserService()
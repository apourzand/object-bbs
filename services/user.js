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

  updateUser(id, data) {
    return userDAO.update(id, data)
  }

  deleteUser(id) {
    return userDAO.delete(id)
  }
}

module.exports = new UserService()
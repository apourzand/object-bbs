const userDAO = require('../dao/user')
const raParamParser = require('./raParamParser')

class UserService {
  getUsers(params) {
    return raParamParser(params, userDAO.findAll())
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
  getUserByEmail(email) {
    return userDAO.findByEmail(email)
  }
}

module.exports = new UserService()
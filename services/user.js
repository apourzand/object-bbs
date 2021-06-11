const userDAO = require('../dao/user');

class UserService {
  getUsers() {
    return userDAO.findAll();
  }

  getUser(id) {
    return userDAO.findById(id);
  }
}

module.exports = new UserService();
const userService = require('../services/user')

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await userService.getUsers()
      res.json(users)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id)
      res.json(user)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async addUser(req, res, next) {
    try {
      const user = await userService.addUser(req.body)
      res.json(user)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

}

module.exports = new UserController()
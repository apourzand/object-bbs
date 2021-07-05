const userService = require('../services/user')
const errorHandler = require('../error-handler')

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await userService.getUsers()
      res.set('X-Total-Count', users.length);
      res.json(users)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id)
      if (!user) {
        res.status(404).send({
          message: "No record with id " + req.params.id,
          type: "NotFound",
          data: {}
        });
      }
      res.json(user)
    } catch (err) {
      errorHandler(err, res)
    }
  }

  async addUser(req, res, next) {
    try {
      const user = await userService.addUser(req.body)
      res.json(user)
    } catch (err) {
      errorHandler(err, res)
    }
  }

  async updateUser(req, res, next) {
    try {
      delete req.body.password;
      const user = await userService.updateUser(req.params.id, req.body)
      res.json(user)
    } catch (err) {
      errorHandler(err, res)
    }
  }

  async deleteUser(req, res, next) {
    try {
      const user = await userService.deleteUser(req.params.id)
      res.json(user)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new UserController()
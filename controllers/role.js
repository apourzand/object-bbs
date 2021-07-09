const roleService = require('../services/role')
const errorHandler = require('../error-handler')

class RoleController {
  async getRoles(req, res, next) {
    try {
      const roles = await roleService.getRoles(req.query)
      res.set('X-Total-Count',roles.length);
      res.json(roles)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async getRole(req, res, next) {
    try {
      const role = await roleService.getRole(req.params.id)
      if (!role) {
        res.status(404).send({
          message: "No record with id " + req.params.id,
          type: "NotFound",
          data: {}
        });
      }
      res.json(role)
    } catch (err) {
      errorHandler(err, res)
    }
  }

  async addRole(req, res, next) {
    try {
      const role = await roleService.addRole(req.body)
      res.json(role)
    } catch (err) {
      errorHandler(err, res)
    }
  }

  async updateRole(req, res, next) {
    try {
      const role = await roleService.updateRole(req.params.id, req.body)
      res.json(role)
    } catch (err) {
      errorHandler(err, res)
    }
  }

  async deleteRole(req, res, next) {
    try {
      const role = await roleService.deleteRole(req.params.id)
      res.json(role)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new RoleController()
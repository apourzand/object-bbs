const roleService = require('../services/role')

class RoleController {
  async getRoles(req, res, next) {
    try {
      const roles = await roleService.getRoles()
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
      res.json(role)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async addRole(req, res, next) {
    try {
      const role = await roleService.addRole(req.body)
      res.json(role)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async updateRole(req, res, next) {
    try {
      const role = await roleService.updateRole(req.params.id, req.body)
      res.json(role)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
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
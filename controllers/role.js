const roleService = require('../services/role');

class RoleController {
  async getRoles(req, res, next) {
    try {
      const roles = await roleService.getRoles();
      res.json(roles);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getRole(req, res, next) {
    try {
      const role = await roleService.getRole(req.params.id);
      res.json(role);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new RoleController();
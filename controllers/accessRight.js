const accessRightService = require('../services/accessRight')

class AccessRightController {
  async getAccessRights(req, res, next) {
    try {
      const accessRights = await accessRightService.getAccessRights()
      res.json(accessRights)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async getAccessRight(req, res, next) {
    try {
      const accessRight = await accessRightService.getAccessRight(req.params.id)
      res.json(accessRight)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async addAccessRight(req, res, next) {
    try {
      const accessRight = await accessRightService.addAccessRight(req.body)
      res.json(accessRight)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async updateAccessRight(req, res, next) {
    try {
      const accessRight = await accessRightService.updateAccessRight(req.params.id, req.body)
      res.json(accessRight)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async deleteAccessRight(req, res, next) {
    try {
      const accessRight = await accessRightService.deleteAccessRight(req.params.id)
      res.json(accessRight)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new AccessRightController()
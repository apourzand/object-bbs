const accessProfileService = require('../services/accessProfile')

class AccessProfileController {
  async getAccessProfiles(req, res, next) {
    try {
      const accessProfiles = await accessProfileService.getAccessProfiles()
      res.set('X-Total-Count', accessProfiles.length)
      res.json(accessProfiles)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async getAccessProfile(req, res, next) {
    try {
      const accessProfile = await accessProfileService.getAccessProfile(req.params.id)
      res.json(accessProfile)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async addAccessProfile(req, res, next) {
    try {
      const accessProfile = await accessProfileService.addAccessProfile(req.body)
      res.json(accessProfile)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async updateAccessProfile(req, res, next) {
    try {
      const accessProfile = await accessProfileService.updateAccessProfile(req.params.id, req.body)
      res.json(accessProfile)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }

  async deleteAccessProfile(req, res, next) {
    try {
      const accessProfile = await accessProfileService.deleteAccessProfile(req.params.id)
      res.json(accessProfile)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new AccessProfileController()
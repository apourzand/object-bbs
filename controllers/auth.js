require('dotenv').config()
const userService = require('../services/user')
const jwt = require("jsonwebtoken")
const { response } = require('express')

const SECRET = process.env.SECRET

class AuthController {
    async login(req, res, next) {
        try {
            const user = await userService.getUserByEmail(req.body.username)
            if (!user) {
                return res.json({ status: 404, message: "No user with this email", token: null })
            }

            const passwordValid = await user.verifyPassword(req.body.password)
            if (!passwordValid) {
                // throw { status: 401, message: 'Unauthorized Access!' }
                return res.json({ status: 404, message: "Invalid password", token: null })
            }
            return jwt.sign({ 'id': user.id, 'username': user.email, 'role': user.role.name }, SECRET, (err, token) => {
                res.json({ 'id': user.id, 'username': user.email, 'role': user.role.name, "token": token })
            })
        }
        catch (err) {
            return err
        }
    }
}

module.exports = new AuthController()
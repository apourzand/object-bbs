const express = require('express')

const router = express.Router()

//Base
router.get('/', (req, res) => {
    res.send('Welcome to object-bbs')
})

module.exports = router
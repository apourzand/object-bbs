require('dotenv').config()
const setupDb = require('./db-setup')
const express = require('express')
const { format } = require("fecha")
const authenticateToken = require('./middlewares/authenticate-token')

setupDb()

const app = express()
const port = process.env.APP_PORT

app.use(express.json())

app.use('/', require('./routes/base'))
app.use('/user', authenticateToken, require('./routes/user'))
app.use('/role', authenticateToken,  require('./routes/role'))
app.use('/facility', authenticateToken,  require('./routes/facility'))
app.use('/accessProfile', authenticateToken,  require('./routes/accessProfile'))
app.use('/accessRight', authenticateToken,  require('./routes/accessRight'))
app.use('/authenticate', require('./routes/auth'))

app.listen(port, () => {
    console.log(`${format(new Date(), 'isoDateTime').slice(0, 19).replace('T', ' ')} : App listening at http://localhost:${port}`)
})

require('dotenv').config()
const setupDb = require('./db-setup')
const express = require('express')
const { format } = require("fecha")

setupDb()

const app = express()
const port = process.env.APP_PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to object-bbs')
})

app.use('/', require('./routes/base'))
app.use('/user', require('./routes/user'))
app.use('/role',  require('./routes/role'))
app.use('/facility',  require('./routes/facility'))
app.use('/accessProfile',  require('./routes/accessProfile'))
app.use('/accessRight',  require('./routes/accessRight'))

app.listen(port, () => {
    console.log(`${format(new Date(), 'isoDateTime').slice(0, 19).replace('T', ' ')} : App listening at http://localhost:${port}`)
})

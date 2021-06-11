require('dotenv').config()
const setupDb = require('./db-setup')
const express = require('express')

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

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

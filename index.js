require('dotenv').config()
const setupDb = require('./db-setup');
const express = require('express')
const router = require('./routes/index');

setupDb();

const app = express()
const port = process.env.APP_PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to object-bbs')
})

app.use(router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

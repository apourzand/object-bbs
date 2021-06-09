require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.APP_PORT

app.get('/', (req, res) => {
  res.send('Welcome to object-bbs')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

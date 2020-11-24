const path = require('path')
const express = require('express')

const app = express()
const route = (process.env.SPA === 'true') ? '*' : '/'

app.get(route, (req, res) => {
  res.sendFile(path.resolve(__dirname, process.env.ROOT_PATH))
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})
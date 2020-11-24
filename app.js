const path = require('path')
const express = require('express')

const app = express()
const routes = (process.env.SPA === 'true') ? '*' : ''
const rootPath = `${process.env.ROOT_DIRECTORY}/index.html`

app.use(express.static(process.env.ROOT_DIRECTORY))

app.get(routes, function (request, response) {
  response.sendFile(path.resolve(__dirname, rootPath))
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})
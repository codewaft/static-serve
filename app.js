const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(process.env.ROOT_DIRECTORY))

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})
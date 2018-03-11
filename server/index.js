const express = require('express')

const app = express()
const port = process.env.PORT || 4001

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:play@localhost:5432/postgres')

app.get('/', (request, response) => {
  response.json({ message: 'You have now entered the API of my 0hh1 game. ' })
})

app.listen(port, () => {
  console.log(`
    Server is listening on ${port}.
    Open http://localhost:${port}
    to see the app in your browser.
  `)
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

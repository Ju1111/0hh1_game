const express = require('express')
const app = express()
const { Game } = require('./models')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')
const gameRouter = require('./game/router')

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:play@localhost:5432/postgres')

app.use(bodyParser.json())
app.use(gameRouter)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

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

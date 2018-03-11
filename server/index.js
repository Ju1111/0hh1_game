const express = require('express')
const app = express()
const { Game } = require('./models')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:play@localhost:5432/postgres')

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.json({ message: 'You have now entered the API of my 0hh1 game. ' })
})

app.post ('/games', (request, response) => {
  const game = request.body
  console.log(game)
  Game
    .create(game)
    .then(entity => {
      response.status(201).send(entity)
    })
    .catch(err => {
      response.status(422)
      response.json({ message: err.message })
    })
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

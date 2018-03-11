const Router = require('express').Router
const Product = require('./model')

const router = new Router()

router.post ('/games', (request, response) => {
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

module.exports = router

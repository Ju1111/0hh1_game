const express = require('express')

const app = express()

const port = process.env.PORT || 4001

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

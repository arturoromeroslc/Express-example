const http = require('http')
const port = 4000
const express = require('express')

const listenCallback = (err) => {
  if (err) {
    return console.log('something went bad', err)
  }

  console.log(`listening on port ${port}`);
}

/*
Simple HTTP server
 */
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.end('Hello Node.js Server')
})

server.listen(port, listenCallback)

/*
Express app
 */
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(5000, listenCallback)

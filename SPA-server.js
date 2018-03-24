const http = require('http')
const fs = require('fs')
const port = 6335
const { log } = require('./app2') // ES7 -> ES6

log()

const {getNewHeaders} = require('./server-utils.js')

const favicon = fs.readFileSync('./favicon.ico')
const index = fs.readFileSync('./webpack-index.html', 'utf8')
const bundle = fs.readFileSync('./dist/bundle.js', 'utf8')

const requestHandler = (req, res) => {
  if (req.url === '/favicon.ico') {
    res.setHeader('Content-Type', 'image/x-icon; binary')
    return res.end(favicon)
  }
  console.log(req.url, req.method)
  const newHeaders = getNewHeaders(req.headers)
  if (newHeaders) {
    console.log(newHeaders)
  }
  if (req.method === 'GET') {
    if (req.url === '/bundle.js') {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
      return res.end(bundle)
    }
    res.end(index)
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
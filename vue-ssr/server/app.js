const Vue = require("vue")
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const app = require("../shared/app")
server.get('*', (req, res) => {
  renderer.renderToString(app, (err, html) => {
    if (err) {
        console.log(err)
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
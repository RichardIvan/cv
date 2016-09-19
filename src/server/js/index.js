/* @flow */
'use strict'

var express = require('express')
var app = express()

var port = process.env.PORT || 8080

// import { html } from '../helpers/html'

app.use('/', express.static('../'))

// app.get('/', (req, res) => {
//   res.writeHead(200, {
//     'Content-Length': html.length,
//     'Content-Type': 'text/html; charset=utf-8'
//   })
//   res.end(html)
// })

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port)
})

// console.log("About to dispatch a request for " + pathname);
//  var content = "Hey " + pathname;
//  if (typeof handler[pathname] === 'function') {
//      content += handler[pathname](req)
//      res.writeHead(200, {
//          'Content-Type': 'text/html'
//      })
//      res.write(response)
//      res.end()
//  } else {
//      console.log("No request handler found for " + pathname);
//      staticHandler.handleStatic(pathname, res);
//  }

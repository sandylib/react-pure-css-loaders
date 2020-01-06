const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { Ring } = require('react-pure-css-loaders')
const express = require('express')

const port = 3001
const app = express()

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Ring))
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))

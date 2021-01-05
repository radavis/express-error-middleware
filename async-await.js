const app = require('express')()

app.get('*', (req, res) => {
  return new Promise((resolve, reject) => {
    // UnhandledPromiseRejectionWarning: Unhandled promise rejection.
    // This error originated either by throwing inside of an async function
    // without a catch block, or by rejecting a promise which was not handled
    // with .catch(). To terminate the node process on unhandled promise
    // rejection, use the CLI flag `--unhandled-rejections=strict`
    setImmediate(() => reject(new Error('whoops')))
  })
})

app.use((err, req, res, next) => {
  console.log('gets skipped')
  res.json({ message: err.message })
})

app.listen(3000)

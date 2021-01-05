const app = require('express')()

app.get('*', (req, res, next) => {
  // reporting async errors must go through `next()`
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
  setImmediate(() => { next(new Error('whoops')) })
})

app.get('*', (req, res, next) => {
  console.log('gets skipped')
})

// error-handling middleware function signature is 4 arguments
// must be loaded last, after all routes and middleware
app.use((err, req, res, next) => {
  res.json({ message: err.message })
})

app.listen(3000)

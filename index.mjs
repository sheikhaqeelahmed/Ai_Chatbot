import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I am express.js')
})

app.get('/food', (req, res) => {
    res.send('Hello, I am Food using express.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'
const app = express()
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('I am express.js')
})

app.get('/food', (req, res) => {
    res.send('Hello, I am Food using express.js')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
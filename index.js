const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alandev:mongo!7931@alandev.tbv3w.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('mongodb connect success'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

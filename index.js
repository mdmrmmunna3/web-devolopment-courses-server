const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/Course.json')

app.get('/', (req, res) => {
  res.send('Web development course server is running ');
})

// call course.json 
app.get('/course', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
  console.log(`Web development course server running on port ${port}`)
})
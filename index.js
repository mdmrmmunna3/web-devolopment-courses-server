const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/Courses.json')

const categorys = require('./data/Course-cateory.json')

app.get('/', (req, res) => {
    res.send('Web development course server is running ');
})

// call course-category.json 
app.get('/category', (req, res) => {
    res.send(categorys)
})

// dynamically call
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const courseCategory = categorys.find(category => category.id === id)
    console.log(id, courseCategory)
    res.send(courseCategory)
})

app.listen(port, () => {
    console.log(`Web development course server running on port ${port}`)
})
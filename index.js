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
app.get('/course-category', (req, res) => {
    res.send(categorys)
})

// dynamically call by id
app.get('/course-category/:id', (req, res) => {
    const id = req.params.id
    const courseCategory = categorys.find(category => category.id === id)
    res.send(courseCategory)
})

// call courses.json
app.get('/courses', (req, res) => {
    res.send(courses)
})

// dynamically call by id
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const course = courses.find(cour => cour.id === id)
    console.log('call',id, course)
    res.send(course)
})


app.listen(port, () => {
    console.log(`Web development course server running on port ${port}`)
})
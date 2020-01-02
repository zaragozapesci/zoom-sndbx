const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const courses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'},
    {id: 4, name: 'Course 4'},
    {id: 5, name: 'Course 5'}
];

app.get('/', (req, res) => {
    res.send("RESTful API Example with Node.js and Express!!!");
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    let courseId = parseInt(req.params.id);
    let course = courses.find(c => c.id === courseId);
    if(!course)
        res.status(404).send(`The course with ID ${courseId} was not found`);
    res.send(course);
});

app.listen(port, () => console.log(`Listening on port ${port}!...`));

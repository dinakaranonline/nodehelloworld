const express = require('express');
const auth = require('./auth');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
if(app.get('env')==='development'){
app.use(morgan('tiny'));
console.log('morgan enabled');
}
app.use(function (req, response, next) {
    console.log('logging all requests');
    next();
});

app.use(auth);

const courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
    { id: 4, name: 'course 4' },
    { id: 5, name: 'course 5' },
    { id: 6, name: 'course 6' }
]
app.get('/', (req, res) => {
    res.send('hello world now');
});

app.get('/api/courses', (req, res) => {
    var myCourses = [1, 2, 3, 4, 5];
    res.send(JSON.stringify(myCourses));
});

app.get('/api/courses/:id', (req, res) => {
    res.send(`cours details for ${req.params.id}`);
});

app.get('/api/courses1/:year/:month', (req, res) => {
    res.send(req.params);
});

app.get('/api/courses2/:year/:month', (req, res) => {
    res.send(req.query);
});

app.get('/api/newcourses/', (req, res) => {
    res.send(courses);
});

app.get('/api/newcourses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('course not found');
    res.send(course);
});


app.post('/api/newcourses/', (req, res) => {
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
/* app.put();
app.post();
app.delete(); */

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port} `));
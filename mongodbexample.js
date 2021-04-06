const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongodb....'))
    .catch(err => console.error('error connecting mongodb....', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

async function createCourse() {
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: 'React Course',
        author: 'Moss',
        tags: ['react', 'frontend'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const Course = mongoose.model('Course', courseSchema);
    const courses = await Course
    .find({author : 'Dinakaran'})
    .select({name:1, tags: 1});
    console.log(courses);
}

//createCourse();
getCourses();
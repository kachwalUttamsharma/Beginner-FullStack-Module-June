const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    instructor: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
})

const CourseModel = mongoose.model('courses', courseSchema)

module.exports = CourseModel
const express = require('express');
const { createCourse, getAllCourses, getById, 
    getByField, updateById, deleteById, 
    getAllCourseAboveRating } = require('../controller/courseController');
const router = express.Router();


router.post('/createCourse', createCourse)
.get('/getAllCourses', getAllCourses)
.get('/getCourse/:id', getById)
.get('/getByField', getByField)
.get('/getAllCourseAboveRating', getAllCourseAboveRating)
.patch('/updateCourse/:id', updateById)
.delete('/deleteCourse/:id', deleteById)

module.exports = router
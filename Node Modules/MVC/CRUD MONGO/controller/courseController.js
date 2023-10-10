const CourseModel = require("../model/courseModel")


const createCourse = async (req, res) => {
    const course = new CourseModel({
        name: req.body.name,
        instructor: req.body.instructor,
        publishedDate: req.body.date,
        isPublished: req.body.isPublished,
        rating: req.body.rating
    })
    try{
        const dataToSave = await course.save();
        res.status(200).json(dataToSave);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const getAllCourses = async (req, res) => {
    try {
        const data = await CourseModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const data = await CourseModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getByField = async (req, res) => {
    try {
        const key = req.body.field
        const data = await CourseModel.find({key: key})
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await CourseModel.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await CourseModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllCourseAboveRating = async (req, res) => {
    try {
        // gte, lte, gt, lt
        const data = await CourseModel.find({rating: {$lte: req.body.rating}});
        res.json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getById,
    getByField,
    updateById,
    deleteById,
    getAllCourseAboveRating
}
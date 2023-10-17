const Movie = require('../models/movieModal');

const AddMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message: "Movie Added Successfully"
        })
    } catch(error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    AddMovie
}
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

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send({
            success: true,
            message: "Movies Fetched Successfully",
            data: movies
        })
    } catch(error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}

const deleteMovies = async(req,res) => {
    try {
        await Movie.findByIdAndDelete(req.body.movieId);
        res.send({
            success: true,
            message: "Movie Deleted Successfully"
        })
    } catch (err) {
        res.send({
            success:false,
            message: err.message
        })
    }
}

const updateMovie = async (req, res) => {
    try {
        await Movie.findByIdAndUpdate(req.body.movieId, req.body);
        res.send({
            success: true,
            message: "Movie Deleted Successfully"
        })
    } catch (err) {
        res.send({
            success:false,
            message: err.message
        })
    }
}

const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.send({
            success: true,
            message: "Movie Fetched Successfully",
            data: movie
        })
    } catch(error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    AddMovie,
    getAllMovies,
    deleteMovies,
    updateMovie,
    getMovieById
}
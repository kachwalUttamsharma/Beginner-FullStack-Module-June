const Upcoming = require("../models/upcomingMovieModel");

const addUpcomingMovie = async (req, res) => {
  try {
    const newMovie = new Upcoming(req.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "Movie added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllUpcomingMovie = async (req, res) => {
  try {
    const movies = await Upcoming.find().sort({ createdAt: -1 });
    res.send({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateUpcomingMovie = async (req, res) => {
  try {
    await Upcoming.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "Movie updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteUpcomingMovie = async (req, res) => {
  try {
    await Upcoming.findByIdAndDelete(req.body.movieId);
    res.send({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addUpcomingMovie,
  getAllUpcomingMovie,
  updateUpcomingMovie,
  deleteUpcomingMovie,
};

const { AddMovie, getAllMovies, deleteMovies, updateMovie, getMovieById } = require('../controllers/movieController');
const router = require('express').Router();
const {validatingAuthToken} = require('../middleware/authMiddleware');

router.post('/add-movie', validatingAuthToken, AddMovie);
router.get('/get-all-movies', validatingAuthToken, getAllMovies);
router.post('/delete-movie', validatingAuthToken, deleteMovies);
router.post('/update-movie', validatingAuthToken, updateMovie);
router.get('/get-movie-by-id/:id', validatingAuthToken, getMovieById);

module.exports = router
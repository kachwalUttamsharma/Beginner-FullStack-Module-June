const router = require("express").Router();
const { addUpcomingMovie, getAllUpcomingMovie, updateUpcomingMovie, deleteUpcomingMovie } = require('../controllers/upcomingMovieController');

router.post('/add-upcoming-movie',addUpcomingMovie);
// get all movies
router.get('/get-all-upcoming-movies', getAllUpcomingMovie);
// update a movie
router.post('/update-upcoming-movie', updateUpcomingMovie);
// // delete a movie
router.post('/delete-upcoming-movie', deleteUpcomingMovie);

module.exports = router;

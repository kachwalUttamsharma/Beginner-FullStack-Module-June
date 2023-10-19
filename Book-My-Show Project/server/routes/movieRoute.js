const { AddMovie } = require('../controllers/movieController');
const router = require('express').Router();

router.post('/add-movie', AddMovie);

module.exports = router
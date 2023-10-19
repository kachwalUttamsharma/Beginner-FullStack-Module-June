const router = require('express').Router();
const {AddTheatre, getAllTheatrByOwnerId} = require('../controllers/theatreController');

router.post('/add-theatre', AddTheatre)
router.post('/get-all-theatres-by-owner', getAllTheatrByOwnerId)


module.exports = router
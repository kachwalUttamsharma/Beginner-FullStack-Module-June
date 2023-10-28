const router = require("express").Router();
const {
  addTheatre,
  getAllTheatresByOwnerId,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  addShowToTheatre,
  getAllShowsByTheatre,
  deleteShow,
  getAllTheatersByMovie,
  getShowById
} = require("../controllers/theatreController");
const { validatingAuthToken } = require("../middleware/authMiddleware");

router.post("/add-theatre", validatingAuthToken, addTheatre);
router.post(
  "/get-all-theatres-by-owner",
  validatingAuthToken,
  getAllTheatresByOwnerId
);
router.post("/update-Theatre", validatingAuthToken, updateTheatre);
router.post("/delete-Theatre", validatingAuthToken, deleteTheatre);
router.get("/get-all-theatres", validatingAuthToken, getAllTheatres);
router.post("/add-shows", validatingAuthToken, addShowToTheatre);
router.post(
  "/get-all-shows-by-theatre",
  validatingAuthToken,
  getAllShowsByTheatre
);
router.post('/delete-show', validatingAuthToken, deleteShow);
router.post('/get-all-theatres-by-movie', validatingAuthToken, getAllTheatersByMovie);
router.post('/get-show-by-id', validatingAuthToken, getShowById)

module.exports = router;

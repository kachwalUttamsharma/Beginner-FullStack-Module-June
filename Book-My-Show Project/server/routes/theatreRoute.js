const router = require("express").Router();
const {
  addTheatre,
  getAllTheatresByOwnerId,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  addShowToTheatre,
  getAllShowsByTheatre,
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

module.exports = router;

const router = require("express").Router();

const {
  getPlants,
  getPlantsById,
} = require("../controllers/plants-controller");

router.route("/").get(getPlants);
router.route("/:id").get(getPlantsById);

module.exports = router;

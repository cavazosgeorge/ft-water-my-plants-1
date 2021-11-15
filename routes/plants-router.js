const router = require("express").Router();

const { getPlants } = require("../controllers/plants-controller");

router.route("/").get(getPlants);

module.exports = router;

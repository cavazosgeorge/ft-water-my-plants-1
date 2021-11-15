const router = require("express").Router();

const { getUsers, getUsersById } = require("../controllers/users-controller");

router.route("/").get(getUsers);
router.route("/:id").get(getUsersById);

module.exports = router;

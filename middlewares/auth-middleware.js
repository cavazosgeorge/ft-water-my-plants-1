const { findBy } = require("../models/users-model");

const checkUsernameExists = async (req, res, next) => {
  try {
    const [user] = await findBy({ username: req.body.username });
    if (!user) {
      next({
        success: false,
        status: 401,
        message: "Please check your username and password and try again",
      });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkUsernameExists };

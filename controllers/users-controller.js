const User = require("../models/users-model");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({
        success: true,
        data: users,
      });
    })
    .catch(next);
};

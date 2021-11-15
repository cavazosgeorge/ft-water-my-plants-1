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

exports.getUsersById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
};

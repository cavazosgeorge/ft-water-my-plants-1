const Users = require("../models/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { checkUsernameExists } = require("../middlewares/auth-middleware");

exports.registerUser = (req, res) => {
  const { username, password, phoneNumber } = req.body;

  Users.insert({
    username,
    password: bcrypt.hashSync(password, 8),
    phoneNumber,
  })
    .then((id) => {
      res.status(201).json({
        sucess: true,
        message: "User registered successfully",
        data: id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.message,
        errorMessage: "Error registering user",
      });
    });
};

exports.loginUser =
  (checkUsernameExists,
  (req, res, next) => {
    const { username, password } = req.body;

    Users.findByUsername(username)
      .then((user) => {
        let bcryptPass = bcrypt.compareSync(password, user.password);

        if (user && bcryptPass) {
          const token = generateToken(user);
          res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
            user,
          });
        } else {
          res.status(401).json({
            success: false,
            errorMessage: "User credentials failed",
          });
        }
      })
      .catch(next);
  });

// GENERATE TOKEN
function generateToken(user) {
  const payload = {
    username: user.username,
    id: user.id,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

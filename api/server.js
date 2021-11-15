const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../routes/users-router");
const authRouter = require("../routes/auth-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

//Todo update message when build week is over
server.get("/", (req, res) => {
  res.send("Welcome build week team to our My Plants API");
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;

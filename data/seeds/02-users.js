const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Jim Halpert",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "1234567890",
        },
        {
          username: "Dwight Schrute",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "2345678901",
        },
        {
          username: "Michael Scott",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "3456789012",
        },
        {
          username: "Pam Beasely",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "4567890123",
        },
        {
          username: "Andy Bernard",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "5678901234",
        },
        {
          username: "Ryan Howard",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "6789012345",
        },
        {
          username: "Creed Braton",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "7890123456",
        },
        {
          username: "Stanley Hudson",
          password: bcrypt.hashSync("1234", 8),
          phoneNumber: "8901234567",
        },
      ]);
    });
};

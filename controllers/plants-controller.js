const Plants = require("../models/plants-model");

exports.getPlants = (req, res, next) => {
  Plants.find()
    .then((plants) => {
      res.json({
        success: true,
        data: plants,
      });
    })
    .catch(next);
};

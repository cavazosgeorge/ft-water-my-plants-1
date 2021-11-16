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

exports.getPlantsById = (req, res) => {
  const { id } = req.params;
  Plants.findById(id)
    .then((plant) => {
      if (plant) {
        res.json(plant);
      } else {
        res.status(404).json({ message: "Could not find plant by id given" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to get plant" });
    });
};

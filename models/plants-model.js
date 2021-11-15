const db = require("../data/db-config");

function find() {
  return db("plants");
}

function findById(id) {
  return db("plants").where({ id });
}

function findPlantsByUser(id) {
  return db("plants").where({ id });
}

function add(plants) {
  return db("plants")
    .insert(plants)
    .then((res) => {
      const id = res[0];
      return db("plants").where({ id: id });
    });
}

function update(changes, id) {
  return db("plants")
    .where({ id: id })
    .update(changes)
    .then((res) => {
      return db("plants").where({ id });
    });
}

function remove(id) {
  return db("plants").where({ id: id }).del();
}

module.exports = {
  find,
  findById,
  findPlantsByUser,
  add,
  update,
  remove,
};

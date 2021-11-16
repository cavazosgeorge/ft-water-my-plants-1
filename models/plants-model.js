const db = require("../data/db-config");

function find() {
  return db("plants");
}

function findById(id) {
  return db("plants").where({ id }).first();
}

// function findPlantsByUser(user_id) {
//   return db("plants").where({ user_id });
// }

function add(plant) {
  return db("plants")
    .insert(plant)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("plants")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findById(id);
    });
}

function remove(id) {
  return db("plants").where({ id }).del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

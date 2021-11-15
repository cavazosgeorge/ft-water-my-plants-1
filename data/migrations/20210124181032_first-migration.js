exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments();

    users.string("username", 255).notNullable().unique();
    users.string("password", 255).notNullable();
    users.string("phoneNumber", 32).notNullable();
    users;
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};

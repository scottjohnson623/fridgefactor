const Knex = require("knex");
require("dotenv").config();

const db = Knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DATABASE_USER}@127.0.0.1:5432/${process.env.DATABASE_NAME}`,
  searchPath: "public",
});

module.exports = db;

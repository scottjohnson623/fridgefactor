const Knex = require("knex");
require('dotenv').config();

const db = Knex({
  client: "pg",
  connection:
    process.env.DB_URL ||
    `postgres://${process.env.DB_USER}@127.0.0.1:5432/${process.env.DB_NAME}`,
  searchPath: "public",
});

module.exports = db;

require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
  testing: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
};

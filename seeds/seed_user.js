const db = require("../db");

function insert() {
  return db("user").insert([
    { username: "Scott", password: "test" },
    { username: "Vincent", password: "test" },
    { username: "Jimmy", password: "test" },
    { username: "Ayumi", password: "test" },
  ]);
}
insert();

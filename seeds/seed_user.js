import db from "../db";

function insert() {
  return db("user")
    .del()
    .then(function () {
      return knex("user").insert([
        { username: "Scott", password: "test" },
        { username: "Vincent", password: "test1" },
        { username: "Jimmy", password: "test2" },
        { username: "Ayumi", password: "test3" },
      ]);
    });
}
insert();

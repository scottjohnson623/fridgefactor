exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      return knex("user").insert([
        { username: "Scott", password: "test" },
        { username: "Vincent", password: "test1" },
        { username: "Jimmy", password: "test2" },
        { username: "Ayumi", password: "test3" },
      ]);
    });
};

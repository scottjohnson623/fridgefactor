
exports.up = function(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments().index();
    
        table.text("username");
    
        table.text("password");
      });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("user")
};

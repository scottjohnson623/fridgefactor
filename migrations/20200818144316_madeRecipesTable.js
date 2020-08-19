
exports.up = function(knex) {
    return knex.schema.createTable("made_recipes", (table) => {
        table.increments().index();

        table
        .integer('user_id')
        .references('id')
        .inTable('user')
    
        table.text("title");
    
        table.text("href");

        table.text("ingredients");

        table.text("thumbnail");
      })
      .createTable("starred_recipes", (table) => {
        table.increments().index();

        table
        .integer('user_id')
        .references('id')
        .inTable('user')

        table.integer('made_recipes_id')
        .references('id')
        .inTable('made_recipes')
    
        table.text("title");
    
        table.text("href");

        table.text("ingredients");

        table.text("thumbnail");
      });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("made_recipes").dropTableIfExists("starred_recipes")
};

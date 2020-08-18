
exports.up = function(knex) {
    return knex.schema.createTable("made_recipes", (table) => {
        table.increments().index();

        table
        .integer('user_id')
        .references('id')
        .inTable('user')
    
        table.text("recipe_name");
    
        table.text("url");

        table.integer("rating");

        table.text("comments");
      })
      .createTable("stared_recipes", (table) => {
        table.increments().index();

        table
        .integer('user_id')
        .references('id')
        .inTable('user')

        table.integer('made_recipes_id')
        .references('id')
        .inTable('made_recipes')
    
        table.text("api_title");
    
        table.text("url");

        table.text("image");
      });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("made_recipes")
};

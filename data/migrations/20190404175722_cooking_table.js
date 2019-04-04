
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('dishes', tbl => {
    tbl.increments();
    tbl.string('name', 100).notNullable().unique()
  })

  .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('instructions', 200).notNullable()
      tbl.integer('dish_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('dishes')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
  })

  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 100).notNullable().unique()
  })

  .createTable('recipes_ingredients', tbl => {
      tbl.increments()
      
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl
        .integer('ingredient_id')
        .unsigned('notNullable')
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.float('quantity', precision, scale)

      tbl.string('unit', 20).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingerdients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes')
};

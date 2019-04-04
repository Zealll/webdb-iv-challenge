
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 5.5, unit: 'kg'},
        {recipe_id: 1, ingredient_id: 2, quantity: 700, unit: 'g'},
        {recipe_id: 2, ingredient_id: 3, quantity: 3, unit: 'kg'},
        {recipe_id: 2, ingredient_id: 2, quantity: 800, unit: 'g'}
      ]);
};

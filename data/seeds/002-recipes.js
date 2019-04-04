
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Khinkali'},
        {dish_id: 2, name: 'Khachapuri'}
      ]);
};

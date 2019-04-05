
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Beef'},
        {name: 'Flour'},
        {name: 'Cheese'}
      ]);
};

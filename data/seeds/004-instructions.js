
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, step_description: 'blah'},
        {recipe_id: 1, step_number: 2, step_description: 'blah blah'},
        {recipe_id: 1, step_number: 3, step_description: 'blah blah blah'},
        {recipe_id: 2, step_number: 1, step_description: 'blah blah blah'}
      ]);
};

const db = require('../data/dbConfig.js')

module.exports = {
    getDishes,
    addDish,
    getDish,
}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(ids => ids[0])
}

function getDish(id) {
    return db('dishes as d')
    .join('recipes as r', 'd.id', 'r.dish_id', )
    .join('instructions as ins', 'ins.recipe_id', 'r.id')
    .select('d.id', 'd.name', 'r.name as Recipe name', 'ins.step_number', 'ins.step_description')
    .where('d.id', id)
}
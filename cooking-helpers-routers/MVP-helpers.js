const db = require('../data/dbConfig.js')

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,

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

function getRecipes() {
    return db('recipes as r')
    .join('dishes as d', 'd.id', 'r.dish_id')
    .select('d.name as Recipe Dish Name', 'r.name as Recipe Name')
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    .then(ids => ids[0])
}

// function getDishById(id) {
//     let data = db('dishes as d')

//     data
//     .where('d.id', id)

//     const promises = [data, this.getRecipes(id)]
//     return Promise.all(promises).then(function(results) {
//         let [dishes, recipes] = results

//         dishes.recipes = recipes

//         return mappers.dishesToBody(dishes)
//     })
// }
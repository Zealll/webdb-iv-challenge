const db = require('../data/dbConfig.js')

module.exports = {
    getDishes,
    addDish
}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(ids => ids[0])
}
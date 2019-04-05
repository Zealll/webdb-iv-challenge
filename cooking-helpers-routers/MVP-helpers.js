const db = require('../data/dbConfig.js')

module.exports = {
    getDishes
}

function getDishes() {
    return db('dishes')
}
//importing knex
knex = require('knex')

//importing contents of the KNEXFILE.JS as knexConfig
const knexConfig = require('../knexfile.js')

// assigning the value of "development" section from knexfile.js
// so that we can connect to the right database
const db = knex(knexConfig.development)




module.exports = db
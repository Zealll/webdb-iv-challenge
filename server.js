//importing EXPRESS and HELMET
const express = require('express')
const helmet = require('helmet')


const router = require('./cooking-helpers-routers/MVP-routers.js')


const server = express()

server.use(helmet())
server.use(express.json())


// making a welcome page endpoint
server.get('/', (req, res) => {
    res.send(res.send(
        `<h1>Welcome to Elan's Project!</h1>`
    ))
})

server.use('/api/database', router)

// exporting everything that has a keyword of SERVER at the beginnig
module.exports = server
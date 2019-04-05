//importing contents of server.js as server
const server = require('./server.js')


// creating a port dynamic just in case we create am ENV file in the future
const port = process.env.PORT || 5000


server.listen(port, () => {
    console.log(`\n* Server Running on http://localhost:${port} *\n`)
})
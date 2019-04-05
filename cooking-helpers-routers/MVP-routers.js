const express = require('express')
const router = express.Router()

const db = require('./MVP-helpers.js')

router.get('/', (req, res) => {
    db
    .getDishes()
    .then(dishes => {
        res.json(dishes)
    })
    .catch(error => res.status(500).json(error))
})

router.post('/', (req, res) => {
    const body = req.body

    db
    .addDish(body)
    .then(newDish => {
        res
        .status(201)
        .json({message: `ID for the new Dish is ${newDish}`})
    })
    .catch(error => res.status(500).json(error))
})






module.exports = router
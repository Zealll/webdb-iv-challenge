const express = require('express')
const router = express.Router()

const data = require('../data/dbConfig.js')

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

router.get('/:id', (req, res) => {
    const id = req.params.id

    db
    .getDish(id)
    .then(dish => {
        res.json(dish)
    })
    .catch(error => res.status(500).json(error))

})

router.get('/blah/recipes', (req, res) => {
    db
    .getRecipes()
    .then(recipes => res.json(recipes))
    .catch(error => res.status(500).json(error))
})

router.post('/blah/recipes', (req, res) => {
    const body = req.body

    db
    .addRecipe(body)
    .then(newRecipe => {
        res.status(201)
        .json({message: `ID for the new Recipe is ${newRecipe}`})
    })
})


router.get('/test/:id', (req, res) => {
    const id = req.params.id

    data('dishes as d')
    .where('d.id', id)
    .then(dish => {
        const selectedDish = dish[0]
        data('recipes as r')
        .where('r.dish_id', id)
        .then(recipes => {
            const selectedRecipes = recipes
            data('instructions as ins')
            .where('ins.recipe_id', id)
            .then(instructions => {
                res.json({
                    id: selectedDish.id,
                    name: selectedDish.name,
                    recipe: selectedRecipes.map(recipes => ({
                        dish_id: recipes.dish_id,
                        recipe_name: recipes.name,
                        instructions: instructions.map(ins => ({
                            step_number: ins.step_number,
                            description: ins.step_description
                        }))
                    })),
                })
            })
        })
    })
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id

//     data('dishes as d')
//     .where('d.id', id)
//     .then(dish => {
//         const selectedDish = dish[0]
//         data('recipes as r')
//         .join('instructions as ins', 'r.id', 'ins.recipe_id')
//         .select(
//             'r.dish_id',
//             'r.name as Recipe Name',
//             'ins.step_number',
//             'ins.step_description'
//         )
//         .where('r.dish_id', id)
//         .then(recipes => {
//             const selectedRecipes = recipes[0]
//             data('instructions as ins')
//             .where('ins.id', id)
//             .then(response => {
//                 res.json({
//                     id: selectedDish.id,
//                     name: selectedDish.name,
//                     recipe: selectedRecipes
//                 })
//             })
//         })
//     })
// })


// instructions: response.map(res => ({
//     step: res.step_number,
//     description:res.step_description
// }
// ))

// router.get('/:id', (req, res) => {
//     const id = req.params.id

//     db
//     .getDish(id)
//     .then(dish => {
//         res.json(dish)
//     })
//     .catch(error => res.status(500).json(error))

// })






module.exports = router
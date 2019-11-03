const express = require('express')
const db = require('./database.js')


const router = express.Router();


router.get('/', async(req, res)=>{

    // ES5 method of dealing with promises
    // db.any("SELECT * FROM users")
    //     .then((rows)=>{
    //         console.log(rows)
    //         res.json(rows)
    //     })
    //     .catch ((error=>{
    //         console.log(error)
    //     }))

    //ES6 method async-await with try-catch
    try {
        let users = await db.any("SELECT * FROM users")
        res.json({
            payload:users,
            message: 'Success. Retrieved all the users.'
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "Error. Something went wrong."
        })
    }
})


router.post('/register', async (req, res)=>{
    //firstname, lastname, age
    let insertQuery = `INSERT INTO users(firstname, lastname, age)
    VALUES($1,$2,$3)
    `
    try{
        await db.none(insertQuery, [req.body.firstname, req.body.lastname, req.body.age])
        res.json({
            payload: req.body, 
            message:'User registered'})
    } catch(error) {
        res.json({
            message: 'There was an error registering the user'
        })
    } 

})

router.post('/kill', async (req, res)=>{
    console.log(req.body)
})

module.exports = router;
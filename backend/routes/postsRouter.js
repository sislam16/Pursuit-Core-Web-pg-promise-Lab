const express = require('express');
const router = express.Router();
const db = require('./database.js')

router.get('/all', async(req, res) => {
  // res.send('Sending all posts!');
  try{
    let posts = await db.any("SELECT * FROM posts")
    res.json({
      payload:posts,
      message:'Success. Retrieved all the posts.'
    })

  } catch(error){
    console.log(error)
    res.json({
      message: 'Error! Something went wrong. '
    })

  }
});

router.get('/:user_id', async(req, res) => {
  let insertQuery = `SELECT * FROM posts WHERE id = $1`
  try{
    let test = await db.any(insertQuery, [req.params.user_id])
    res.json({
      payload: req.body,
      message: 'Posts retrieved'
    })
  } catch (error){
    console.log(error)
    res.json({
      message: 'Error! Something went wrong.'
    })
  }
 
});

router.post('/register', async(req, res) => {
  try{
    let insertQuery = `INSERT INTO posts(poster_id, body)
    VALUES($1,$2)
                `
    await db.none(insertQuery, [req.body.poster_id, req.body.body])
    res.json({
      payload: req.body,
      message: 'Post created.'
    })
  } catch(error){
    res.json({
      message: 'There was an error creating the post!'
    })
    console.log(error);
    
  }
  
});

module.exports = router;
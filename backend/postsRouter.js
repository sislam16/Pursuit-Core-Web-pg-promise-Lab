const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
  res.send('Sending all posts!');
});

router.get('/:user_id', (req, res) => {
  res.send('Sending all post from this user!');
});

router.post('/register', (req, res) => {
  res.send('Creating new post!');
});

module.exports = router;
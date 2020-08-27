const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'The UNO Game' });
});

/* GET waiting room page. */
router.get('/waiting-room', (req, res) => {
  res.render('waiting-room', { title: 'Waiting Room' });
});

module.exports = router;

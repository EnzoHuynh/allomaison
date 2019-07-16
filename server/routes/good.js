const express = require('express');
const Good = require('../models/good');
const router = express.Router();

router.get('/', (req, res) => {
    Good.find(req.query).then(data => res.json(data));
})

router.post('/', (req, res) => {
  const good = new Good(req.body);
  good.save()
    .then(data => res.status(201).json(data))
    .catch(error => {
      if (error.name === 'ValidationError') {
        res.status(400).json(error.errors);
      } else {
        res.sendStatus(500);
      }
    });
})

module.exports = router;
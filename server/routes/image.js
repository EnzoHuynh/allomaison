const express = require('express');
const Image = require('../models/image');
const router = express.Router();

router.get('/', (req, res) => {
    Image.find(req.query).then(data => res.json(data));
})

router.post('/', (req, res) => {
  const image = new Image(req.body);
  image.save()
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
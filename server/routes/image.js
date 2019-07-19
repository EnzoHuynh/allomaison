const express = require('express');
const Image = require('../models/image');
const router = express.Router();

router.get('/:id', (req, res) => {
    Image.findById(req.params.id, (err, image) => res.json(image))
})

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

router.delete('/delete/:id', (req, res) => {
    Image.remove({_id: req.params.id}, error => {
        !error ? res.status(200).json('Resource deleted successfully') : res.status(500).json(error.errors);
      });
})

router.put('/edit/:id', (req, res) => {
    Image.findById(req.params.id).then(image => {
      const { path } = req.body;

      image.path = path || image.path;

      image.save(error => !error ? res.status(200).json(image) : res.status(500).json(error.errors));
    });
  })

module.exports = router;

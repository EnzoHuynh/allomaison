const express = require('express');
const Good = require('../models/good');
const router = express.Router();

router.get('/', (req, res) => {
  Good.find(req.query).then(data => res.json(data));
})

router.get('/:id', (req, res) => {
  Good.findById(req.params.id).then(data => res.json(data));
})

router.get('/user/:id', (req, res) => {
  Good.find({ id_user: req.params.id }).then(data => res.json(data));
})

router.get('/city/:city/type/:type', (req, res) => {
  Good.find({ city: req.params.city, type: req.params.type }).then(data => res.json(data));
})

router.post('/', (req, res) => {
  console.log(req.body);
  const good = new Good(req.body);
  good.save()
    .then(data => res.status(201).json(data))
    .catch(error => {
      if (error.name === 'ValidationError') {
        res.status(400).json(error.errors);
        console.log(error);
      } else {
        res.sendStatus(500);
      }
    });
})

router.put('/edit/:id', (req, res) => {
  Good.findById(req.params.id).then(good => {
    const { title, address, zipcode, city, description, price, room, bedroom, square_meters, status, type } = req.body;

    good.title = title || good.title;
    good.address = address || good.address;
    good.zipcode = zipcode || good.zipcode;
    good.city = city || good.city;
    good.description = description || good.description;
    good.price = price || good.price;
    good.room = room || good.room;
    good.bedroom = bedroom || good.bedroom;
    good.square_meters = square_meters || good.square_meters;
    good.status = status || good.status;
    good.type = type || good.type;

    good.save(error => !error ? res.status(200).json(good) : res.status(500).json(error.errors));
  });
})

router.delete('/delete/:id', (req, res) => {
  Good.remove({ _id: req.params.id }, error => {
    !error ? res.status(200).json('Resource deleted successfully') : res.status(500).json(error.errors);
  });
})

module.exports = router;

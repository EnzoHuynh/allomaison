const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
  User.find(req.query).then(data => res.json(data));
})

router.put('/edit/:id', (req, res) => {
  User.findById(req.params.id).then(user => {
    const { firstname, lastname, email, password, dob  } = req.body;

    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.email = email || user.email;
    user.password = password || user.password;
    user.dob = dob || user.dob;

    user.save(error => !error ? res.status(200).json(user) : res.status(500).json(error.errors));
  });
})

router.delete('/delete/:id', (req, res) => {
  User.remove({
      _id: req.params.id
  }, function (error) {
    !error ? res.status(200).json('Resource deleted successfully') : res.status(500).json(error.errors);
  });
})

module.exports = router;

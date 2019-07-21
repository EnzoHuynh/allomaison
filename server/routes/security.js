const express = require('express');
const createToken = require('../lib/auth').createToken;
const User = require('../models/user');
const router = express.Router();

router.post('/register', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    dob
  } = req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    password,
    dob
  });

  user.register()
    .then(user => {
      res.status(201).send({
        user
      });
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        res.status(400).json(error.errors);
      } else {
        res.sendStatus(500);
      }
    });
});

router.post('/login_check', (req, res) => {
  const {
    email,
    password
  } = req.body;

  User.login(email, password)
    .then(user => {
      const token = createToken({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
      const trimmedUser = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dob: user.dob,
      }
      res.status(201).send({
        token,
        user: trimmedUser
      });
    })
    .catch(error => {
      res.status(400).send({
        error: 'Invalid credentials'
      });
    });
});

module.exports = router;

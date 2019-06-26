const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
  User.find(req.query).then(data => res.json(data));
})

module.exports = router;

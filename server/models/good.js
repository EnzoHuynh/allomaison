const db = require('../lib/db');
const mongoose = require('mongoose');

const GoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },
  bedroom: {
    type: Number,
    required: true,
  },
  square_meters: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  id_user: {
    type: String,
    required: true,
  },
});

GoodSchema.pre('save', function (next) {
  console.log('Saving...' + this.title);
  next();
});

GoodSchema.post('save', function (doc) {
  console.log(doc.title + ' is saved');
});

module.exports = db.model('Good', GoodSchema);

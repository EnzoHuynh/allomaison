const db = require('../lib/db');
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  id_good: {
    type: String,
    required: true,
  },
});

ImageSchema.pre('save', function (next) {
  console.log('Saving...' + this.title);
  next();
});

ImageSchema.post('save', function (doc) {
  console.log(doc.title + ' is saved');
});

module.exports = db.model('Image', ImageSchema);
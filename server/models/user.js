const db = require('../lib/db');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.*/
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (next) {
  bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(this.password, salt)
      .then(hash => {
        this.password = hash;
        next();
      })
      .catch(error => console.log(error)));
});

UserSchema.methods.register = function () {
  return this.save();
}

UserSchema.statics.login = function (email, password) {
  return new Promise((resolve, reject) => {
    User.findOne({
      email
    }).then(user => {
      if (!user) return reject('User not found')
      bcrypt.compare(password, user.password).then(res => res ? resolve(user) : reject('Wrong password'));
    })
  })
}

const User = db.model('User', UserSchema);

module.exports = User;

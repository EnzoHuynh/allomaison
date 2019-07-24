var expect = require('chai').expect;

var User = require('../models/user');

describe('User', function() {

  it('Email required', function(done) {
    var user = new User();

    user.validate(function(err) {
      expect(err.errors.email).to.exist;
      done();
    });
  });

  it('All parameters valid', function(done) {
    var user = new User(
      {  
        firstName: "test",
        lastName: "test",
        email: "test@gmail.com",
        password: "test",
        dob: "2018-05-12"
      });

      user.validate(function(err) {
      expect(err).to.equal(null);
      done();
    });
  });

  it('email invalid', function(done) {
    var user = new User(
      {  
        firstName: "test",
        lastName: "test",
        email: "testgmail.com",
        password: "test",
        dob: "2018-05-12"
      });

      user.validate(function(err) {
      expect(new Error).to.be.an('error');
      done();
    });
  });

  it('password invalid', function(done) {
    var user = new User(
      {  
        firstName: "test",
        lastName: "test",
        email: "testgmail.com",
        password: 1,
        dob: "2018-05-12"
      });

      user.validate(function(err) {
      expect(new Error).to.be.an('error');
      done();
    });
  });

  it('dob invalid', function(done) {
    var user = new User(
      {  
        firstName: "test",
        lastName: "test",
        email: "testgmail.com",
        password: "test",
        dob: 2018-05-12
      });

      user.validate(function(err) {
      expect(new Error).to.be.an('error');
      done();
    });
  });



});
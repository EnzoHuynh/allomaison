var expect = require('chai').expect;

var Good = require('../models/good');

describe('Good', function() {

  it('Missing parameters', function(done) {
    var good = new Good();

    good.validate(function(err) {
      expect(err.errors.title).to.exist;
      expect(err.errors.address).to.exist;
      expect(err.errors.zipcode).to.exist;
      expect(err.errors.city).to.exist;
      expect(err.errors.description).to.exist;
      expect(err.errors.price).to.exist;
      expect(err.errors.room).to.exist;
      expect(err.errors.bedroom).to.exist;
      expect(err.errors.square_meters).to.exist;
      expect(err.errors.status).to.exist;
      expect(err.errors.id_user).to.exist;
      done();
    });
  });

  it('All parameters valid', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:9919, city:'test',
        description:'test',
        price:9090,
        room:9,
        bedroom:9,
        square_meters :8,
        status :true,
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err).to.equal(null);

      done();
    });
  });

  it('zip code invalid type', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:'not valid',
        city:'test',
        description:'test',
        price:9090,
        room:9,
        bedroom:9,
        square_meters :8,
        status :true,
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err.errors.zipcode).to.exist;
      expect(err.errors.title).not.exist;
      expect(err.errors.address).not.exist;
      expect(err.errors.city).not.exist;
      expect(err.errors.description).not.exist;
      expect(err.errors.price).not.exist;
      expect(err.errors.room).not.exist;
      expect(err.errors.bedroom).not.exist;
      expect(err.errors.square_meters).not.exist;
      expect(err.errors.status).not.exist;
      expect(err.errors.id_user).not.exist;
      done();
    });
  });

  it('price  invalid type', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:9999,
        city:'test',
        description:'test',
        price:'price',
        room:9,
        bedroom:9,
        square_meters :8,
        status :true,
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err.errors.price).to.exist;
      expect(err.errors.title).not.exist;
      expect(err.errors.address).not.exist;
      expect(err.errors.city).not.exist;
      expect(err.errors.description).not.exist;
      expect(err.errors.zipcode).not.exist;
      expect(err.errors.room).not.exist;
      expect(err.errors.bedroom).not.exist;
      expect(err.errors.square_meters).not.exist;
      expect(err.errors.status).not.exist;
      expect(err.errors.id_user).not.exist;
      done();
    });
  });

  it('room  invalid type', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:9999,
        city:'test',
        description:'test',
        price:777,
        room:'romm',
        bedroom:9,
        square_meters :8,
        status :true,
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err.errors.room).to.exist;
      expect(err.errors.title).not.exist;
      expect(err.errors.address).not.exist;
      expect(err.errors.city).not.exist;
      expect(err.errors.description).not.exist;
      expect(err.errors.zipcode).not.exist;
      expect(err.errors.price).not.exist;
      expect(err.errors.bedroom).not.exist;
      expect(err.errors.square_meters).not.exist;
      expect(err.errors.status).not.exist;
      expect(err.errors.id_user).not.exist;
      done();
    });
  });

  it('bedroom  invalid type', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:9999,
        city:'test',
        description:'test',
        price:777,
        room: 8,
        bedroom:'nnn',
        square_meters :8,
        status :true,
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err.errors.bedroom).to.exist;
      expect(err.errors.title).not.exist;
      expect(err.errors.address).not.exist;
      expect(err.errors.city).not.exist;
      expect(err.errors.description).not.exist;
      expect(err.errors.zipcode).not.exist;
      expect(err.errors.price).not.exist;
      expect(err.errors.room).not.exist;
      expect(err.errors.square_meters).not.exist;
      expect(err.errors.status).not.exist;
      expect(err.errors.id_user).not.exist;
      done();
    });
  });

  it('square_meters  invalid type', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:9999,
        city:'test',
        description:'test',
        price:777,
        room: 8,
        bedroom:7,
        square_meters :'square_meters',
        status :true,
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err.errors.square_meters).to.exist;
      expect(err.errors.title).not.exist;
      expect(err.errors.address).not.exist;
      expect(err.errors.city).not.exist;
      expect(err.errors.description).not.exist;
      expect(err.errors.zipcode).not.exist;
      expect(err.errors.price).not.exist;
      expect(err.errors.room).not.exist;
      expect(err.errors.bedroom).not.exist;
      expect(err.errors.status).not.exist;
      expect(err.errors.id_user).not.exist;
      done();
    });
  });
  it('status  invalid type', function(done) {
    var good = new Good(
      {title : 'test',
        address :'test',
        zipcode:9999,
        city:'test',
        description:'test',
        price:777,
        room: 8,
        bedroom:7,
        square_meters :7,
        status :'status',
        type:'test',
        id_user:'test'
      });

    good.validate(function(err) {
      expect(err.errors.status).to.exist;
      expect(err.errors.title).not.exist;
      expect(err.errors.address).not.exist;
      expect(err.errors.city).not.exist;
      expect(err.errors.description).not.exist;
      expect(err.errors.zipcode).not.exist;
      expect(err.errors.price).not.exist;
      expect(err.errors.room).not.exist;
      expect(err.errors.bedroom).not.exist;
      expect(err.errors.square_meters).not.exist;
      expect(err.errors.id_user).not.exist;
      done();
    });
  });

});
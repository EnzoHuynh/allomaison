var expect = require('chai').expect;

var Image = require('../models/image');


describe('Good', function() {

  it('Missing parameters', function(done) {
    var image = new Image();

    image.validate(function(err) {
      expect(err.errors.path).to.exist;
      expect(err.errors.id_good).to.exist;
      done();
    });
  });


  it('All parameters valid', function(done) {
    var image = new Image({id_good : true, path : 'fake_url'} );

    image.validate(function(err) {
      expect(err).to.equal(null);
      done();
    });
  });


});
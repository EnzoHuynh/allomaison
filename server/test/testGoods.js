var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

let rootJwtToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiaWF0IjoxNTYzOTE0NzQyLCJleHAiOjE1NjM5MTgzNDJ9.Y9YW0LbBlAnnJiqO7dDp4kz8AZNnTIoez7nmJKU78EU`;

chai.use(chaiHttp);


describe('Goods', function() {
    it('should list ALL goods on /goods GET');
    it('should list a SINGLE good on /goods/:id GET');
    it('should add a SINGLE good on /goods POST');
    it('should update a SINGLE good on /goods/edit/:id PUT');
    it('should delete a SINGLE good on /goods/delete/:id DELETE');
  });

it('should list ALL goods on /goods GET', function(done) {
    chai.request(server)
      .get('/goods')
      .set('Authorization', rootJwtToken)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        expect(err).to.be.null;
        done();
      });
  });


  it('should list ALL goods on /goods/:id GET', function(done) {
    chai.request(server)
      .get('/goods/5d3771e91d4602002a0b19b5')
      .set('Authorization', rootJwtToken)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        expect(err).to.be.null;
        done();
      });
  });

  it('should add a SINGLE good on /goods POST', function(done) {
    chai.request(server)
      .post('/goods')
      .set('Authorization', rootJwtToken)
      .send({
        address: "4 bis rue Leon Blum",
        zipcode: "91300",
        city: "Massy",
        price: "200000",
        description: "Superbe appartement lumineux dans le nouveau quartier de Massy",
        title: "Appartement 5 pièce à Massy",
        room:5,
        bedroom: 3,
        square_meters:85,
        status:1,
        type:"louer",
        id_user:"5d3771e91d4602002a0b19b5"
      })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        expect(err).to.be.null;
        done();
      });
  });

  it('should delete a SINGLE good on /goods/delete/:id DELETE', function(done) {
    chai.request(server)
      .delete('/goods/delete/5d3771e91d4602002a0b19b5')
      .set('Authorization', rootJwtToken)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        expect(err).to.be.null;
        done();
      });
  });

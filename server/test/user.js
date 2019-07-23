//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
  // it('login', done => {
  //   chai.request(server)
  //   .post('/login_check')
  //   .send({ email: 'test@gmail.com', password: 'test' })
  //   .then(function (res) {
  //     console.log(res);
  //     expect(res).to.have.status(200);
  //     done();
  //   })
  //   .catch(function (err) {
  //       throw err;
  //   });
  // })


  it('/login', function () {
    return chai.request(server)
        .post('/login_check')
        .set('content-type', 'application/json')
        .send({ email: 'test@gmail.com', password: 'test' })
        .then(function (res) {
          console.log(res);
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
  });

  /*
  * Test the /GET route
  */
  // describe('/GET Users', () => {
  //     it('it should GET all the Users', (done) => {
  //       chai.request(server)
  //         .get('/users')
  //         .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwiaWF0IjoxNTYzOTE1MzU1LCJleHAiOjE1NjM5MTg5NTV9.xq0-TVZOHGRw12Wssp4Bb09g5NoYIzDAp3qVsqfQkzE')
  //         .end((err, res) => {
  //           console.log(res);
  //           // res.should.have.status(200);
  //           // res.body.should.be.a('array');
  //           // res.body.length.should.be.eql(0);
  //           done();
  //         });
  //     });
  // });

});

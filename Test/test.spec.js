let Festival = require('../models/festival'),
    User = require("../models/user"),
    expect = require('chai').expect
    

describe('checking if festival model works', function(){
    describe('new', function(){
        it('initializes a new festival', function(){
            var festival = new Festival();
            festival.name = "Coachella"
            expect(festival.name).to.equal('Coachella');
        });
    });

    describe('new User', function(){
        it('initializes a new User', function(){
            var myUser = new User();
            myUser.userName = "Remy"
            expect(myUser.userName).to.equal('Remy');
        });
    });

});

// let routes = require('../routes/routes')
//     chai = require('chai')
//     chai = require('chai-http');
//     should = chai.should();

// chai.use(chaiHttp);

// describe("Events", () => {
//     beforeEch((done) => {
//         Events.remove({}, (err) => {
//             done();
//         })

//     })
// })
// describe('/GET events', () => {
//     it("it should GET all events", (done) => {
//         chai.request(routes)
//         .get('/events')
//         .end((err, res) => {
//             res.should.have.staus(200);
//             res.body.should.be.a('array');
//             res.body.length.should.be.eql(0);
//             done();
//         })
//     })
// })
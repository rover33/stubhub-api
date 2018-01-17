let Festival = require('../models/festival'),
    User = require("../models/user"),
    expect = require('chai').expect
    request = require('request')
    
//new festival tests
describe('checking if festival model works', function(){
    describe('new', function(){
        it('initializes a new festival', function(){
            var festival = new Festival();
            festival.name = "Coachella"
            expect(festival.name).to.equal('Coachella');
        });
        it("creates a new city", function(){
            var festival = new Festival();
            festival.city = "palm springs"
            expect(festival.city).to.equal("palm springs")
        });
        it("creates a new venue", function(){
            var festival = new Festival();
            festival.venue = "Empire Polo Fields"
            expect(festival.venue).to.equal("Empire Polo Fields")
        })
        it("creates a new date", function(){
            var festival = new Festival();
            festival.date = "April 2018"
            expect(festival.date).to.equal("April 2018")
         });
    })

    describe('new User', function(){
        it('initializes a new User', function(){
            var myUser = new User();
            myUser.userName = "Remy"
            expect(myUser.userName).to.equal('Remy');
        });
        it('initializes a new email', function(){
            var myUser = new User();
            myUser.email = "remy.j.pearlstone@gmail.com"
            expect(myUser.email).to.equal('remy.j.pearlstone@gmail.com');
        });
        it('creates a new pwd', function(){
            var myUser = new User();
            myUser.password= "12345"
            expect(myUser.password).to.equal('12345');
        });

    });

});


var URL = 'https://murmuring-woodland-75290.herokuapp.com/';

describe("heroku", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
		request(URL, function(error, response, body) {
			apiError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it("should return 200 - OK", function() {
		expect(apiResponse.statusCode).to.eq(200);
    });
});

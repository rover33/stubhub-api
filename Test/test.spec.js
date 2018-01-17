let Festival = require('../models/festival'),
    User = require("../models/user"),
    expect = require('chai').expect
    request = require('request')
    

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

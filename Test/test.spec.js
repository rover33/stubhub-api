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

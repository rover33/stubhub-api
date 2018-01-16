let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/user')

module.exports = function(passport){

    passport.serializeUser(function(user, callback){
        callback(null, user.id);
    });

    passport.deserializeUser(function(id, callback){
        User.findById(id, function(err, user){
            callback(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },   function(req, email, password, callback){
          User.findOne({'email': email}, function(err, user){

            if (err) return callback(err);

            if (user){
                console.log("Found user");
                return callback(null, false, req.flash("signupMessage", "Email in use"));
            } else {
                let newUser = new User();
                newUser.email = email;
                newUser.password = newUser.encrypt(password);

                newUser.save(function(err){
                    if (err) return callback (err);
                    return callback(null, newUser);
                });
            };
        });

    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback){

        User.findOne({ 'local.email' : email}, function(err, user){
            if(err) {
                return callback(err);
            }

            if (!user) {
                return callback(null, false, req.flash('loginMessage', 'no user found.'));
            }

            if(!user.validPassword(password)){
                return callback(null, false, req.flash('loginMessage', 'Wrong password.')); 
            }
            
            return callback(null, user);
        });
    }));
};
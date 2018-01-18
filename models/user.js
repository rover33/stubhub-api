const mongoose = require('mongoose')
let Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//new user schema
let UserSchema = new Schema({
    email: String,
    password: String
});

//encrypting the user password
UserSchema.methods.encrypt = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

//checking to see if the password is valid
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model('User', UserSchema)

module.exports = User;
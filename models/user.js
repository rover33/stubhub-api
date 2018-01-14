const mongoose = require('mongoose')
let Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let UserSchema = new Schema({
    email: String,
    password: String
});

UserSchema.methods.encrypt = function(password){
    bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
};

let User = mongoose.model('User', UserSchema)

module.exports = User;
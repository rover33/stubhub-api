var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FestivalSchema = new Schema ({
    name: String,
    venue: String,
    city: String,
    eventDateLocal : Number
});

var Festival = mongoose.model('festical', FestivalSchema)

module.exports = Festival;
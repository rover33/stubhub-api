let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//new schema for creating festivals
let FestivalSchema = new Schema({
    name: String,
    venue: String,
    city: String,
    eventDateLocal : String
});

let Festival = mongoose.model('Festival', FestivalSchema)

module.exports = Festival;
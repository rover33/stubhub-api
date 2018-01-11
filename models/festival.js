let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FestivalSchema = new Schema ({
    name: String,
    venue: String,
    city: String,
    eventDateLocal : Number
});

let Festival = mongoose.model('festical', FestivalSchema)

module.exports = Festival;
let mongoose = require('mongoose')
mongoose.connect('monogodb://localhost:3000')



module.exports.Festival = require('./festival')
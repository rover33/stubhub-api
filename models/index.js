var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  'monogodb://localhost:27017/stubhub-api')



module.exports.Festival = require('./festival')
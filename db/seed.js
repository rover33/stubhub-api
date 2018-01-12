let db = require("../models")
    
let festival_list = [
    {
        name: "Coachella",
        venue: "Empire Polo Fields",
        city: "Palm Springs",
        eventDateLocal: "6pm"
    }

]
    
console.log(festival_list)

db.Festival.remove({}, function(err, festivals){
    console.log(festivals)
    if (err) { return console.log('ERROR', err); }
    console.log("all festivals", festivals);
    

    db.Festival.create(festival_list, function(err, festivals){
        if (err) { return console.log('ERROR', err); }
    console.log("all festivals", festivals);
    // process.exit();
  });

})


// let express = require('express'),
//     app = express(),
//     request = require('request'),
//     db = require("../models")
//     axios = require('axios');
//     require('dotenv').config()



// const headers = { 
//     "Content-Type": process.env.CONTENT_TYPE,
//     "Authorization": process.env.AUTHORIZATION
// }

// app.get('/events', function (req, res){
//     console.log(headers)
//     axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
//         .then(function(response,body){
//             res.send(response.data);
//         })
//         .catch(function(error){
//             console.log(error)
//         })

// db.Festival.remove({}, function(err, festival){
    

//     db.Festival.create(response.data, function(err, festivals){
//         if (err) { return console.log('ERROR', err); }
//     console.log("all festivals", festival);
//     process.exit();
//   });

// })
// })


//require express and modules
let express = require('express'),
    app = express(),
    request = require('request'),
    axios = require('axios');
    require('dotenv').config()

//parse incoming form data
//populate the req.body object
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//tokens
const headers = { 
    "Content-Type": process.env.CONTENT_TYPE,
    "Authorization": process.env.AUTHORIZATION
}

let db = require('./models')

// serve static files in public
app.use(express.static('public'));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

//get index of events
app.get('/events', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
        .then(function(response,body){
            res.send(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    })

//get name of one event
app.get('/events/name', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
        .then(function(response,body){
            let concert = {
                name: response.data.events[0].name,
                venue: response.data.events[0].venue.name,
                eventDateLocal: response.data.events[0].eventDateLocal
            }
            res.send(concert);
        })
        .catch(function(error){
            console.log(error)
        })
    })


//save api info to DB
app.post('/events/save', function (req, res){
    db.Festival.create({
        name: req.body.name,
        // venue: req.body.events[0].venue.name,
        // city: req.body.events[0].venue.city,
        // eventDateLocal: req.body.events[0].eventDateLocal
    })
    res.json(req.body)
    console.log(req.body)


    // Festival.save(function(err, Festival){
    //     if (err){
    //         return console.log("RUN THERE IS AN ERROR: " + err)
    //     }
    //     console.log("created db", Festival)
    //     res.send(Festival)
    // })
})


//add new festival to list
// app.post('/events/save'), function (req,res){
//     let data = req.body
//     console.log(req.body)
//    let newFestival = new db.Festival.create({
//         name: req.body.events[0].name,
//         venue: req.body.events[0].venue.name,
//         city: req.body.events[0].venue.city,
//         eventDateLocal: req.body.events[0].eventDateLocal
//         }, function(err, newFestival){
//             console.log(newFestival)
//         })
    
//     //save new festival to database
//     newFestival.save(function(err, Festival){
//         if (err) {
//             return res.err('couldnt save festival')
//             return console.log("There is an error: " + err);
//         }
//         console.log("created ", newFestival);
//         res.json(Festival)
//         })

    // } 
    





app.listen(process.env.PORT || 3000, function(){
    console.log('Server is up and running on http://localhost:3000/')
})
//require express and modules
var express = require('express'),
    app = express(),
    request = require('request'),
    axios = require('axios');

//parse incoming form data
//populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//tokens
var headers = require('./models');

// serve static files in public
app.use(express.static('public'));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

//get index of events
app.get('/events', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3", {headers: headers})
        .then(function(response,body){
            res.send(response.data);
        })
        .catch(function(error){
            console.log(error)
        })
})

//get name of one event
app.get('/events/name', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3", {headers: headers})
        .then(function(response,body){
            res.send(response.data.events[0].name);
        })
        .catch(function(error){
            console.log(error)
        })
})


app.post('/events/save'), function (req,res){
    axios({
        method: "POST",
        url: "https://api.stubhub.com/search/catalog/events/v3", 
        headers: headers,
        data: {
            name: req.body.events.name,
            venue: req.body.name,
            city: req.body.city
            }
        })
        .then(function(){
    })
}














app.listen(process.env.PORT || 3000, function(){
    console.log('Server is up and running on http://localhost:3000/')
})
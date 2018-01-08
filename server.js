//require express and modules
var express = require('express'),
    app = express(),
    request = require('request');

//parse incoming form data
//populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database
var db = require('./models');

// serve static files in public
app.use(express.static('public'));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


app.get('/name', function (req, res){
    request("https://api.stubhub.com/search/catalog/events/v3", function(error, response, body){
        body.events[0].name;
        console.log(body.events[0].name)
    })
})










app.listen(process.env.PORT || 3000, function(){
    console.log('Server is up and running on http://localhost:3000/')
})
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


app.get('/events', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3", {headers: headers})
        .then(function(response,body){
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error)
        })
       
})













app.listen(process.env.PORT || 3000, function(){
    console.log('Server is up and running on http://localhost:3000/')
})
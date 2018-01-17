//require express and modules
const express = require('express'),
    app = express(),
    request = require('request'),
    axios = require('axios');
    passport = require('passport'),
    session = require('express-session'),
    flash = require('connect-flash');
    require('dotenv').config()

//setup body parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//db
let db = require('./models')

// serve static files in public
app.use(express.static('public'));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
    res.sendFile('views/landingpage.html' , { root : __dirname});
  });

//Set up EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Passport setup
app.use(session({ secret: 'HEY'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

let router = require('./config/routes');

app.use('/', router);

app.listen(process.env.PORT || 3000, function(){
    console.log('Server is up and running on http://localhost:3000/')
})
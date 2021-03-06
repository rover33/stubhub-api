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



//Set up EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Passport setup
app.use(session({ secret: 'HEY'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//requiring passport so it works on other pages
require('./config/passport')(passport);


//function to check and see if the this a current or new user
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//setting up routes for the router
let router = require('./config/routes');

app.use('/', router);

// define a root route: localhost:3000/
app.get('/', function (req, res) {
    res.render('landingpage.ejs' , { root : __dirname});
  });


//listening on local host 3000 or on heroku
app.listen(process.env.PORT || 3000, function(){
    console.log('Server is up and running on http://localhost:3000/')
})
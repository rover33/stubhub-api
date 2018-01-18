const router = require('express').Router(),
      request = require('request'),
      path = require("path"),
      flash = require('connect-flash'),
      axios = require('axios');
      require('dotenv').config()


//requireing models
let db = require('../models')



//access key
const headers = { 
    "Content-Type": process.env.CONTENT_TYPE,
    "Authorization": process.env.AUTHORIZATION
};


  
//authentication routes

//signup
router.get('/signup', function(req, res){
    res.render('signup.ejs', {message: req.flash('signupMessage')});
});

//when siging up this lets us know if there is a duplicate or new user by redirecting
router.post('/signup', function(req, res, next){
    let signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    });

    return signupStrategy(req, res, next);
});

//login message
router.get('/login', function(req, res){
    res.render('login.ejs', {message: req.flash('loginMessage')})
});

//checking to see if the login is correct if not take us back to login
router.post('/login', function(req, res, next){
    console.log('attempting to')
    let loginStrategy = passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true  
    });
    return loginStrategy(req, res, next);
});

//logout routes
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
  });



//website routes
router.get('/newEvent', function(req, res){
    res.render(path.join(process.cwd(),"/views/index.ejs"))   
})



//get index of events
router.get('/events', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
        .then(function(response,body){
          res.render(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    })

//get name of one event
router.get('/events/name', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
        .then(function(response,body){
            let concert = {
                name: response.data.events[0].name,
                venue: response.data.events[0].venue.name,
                city: response.data.events[0].venue.city,
                eventDateLocal: response.data.events[0].eventDateLocal
            }
            res.render(concert);
        })
        .catch(function(error){
            console.log(error)
        })
    })


//Search list of events
router.get('/search', function(req,res){
    db.Festival.find({}, function(err, festivals){
        if (err)
            res.send("there is an error" + err)

        else
            res.render("search.ejs", {festivals})
    })
})

//search by ID
router.get('/search/:id', function(req,res){
    db.Festival.findById(req.params.id, function(err, festivals){
        if (err)
            res.send("there is an error" + err)

        else
            res.json(festivals)
    })
})



//add new festival to list
router.post('/events/save', function (req,res){

    let festival = new db.Festival({
        name: req.body.name,
        venue: req.body.venue,
        city: req.body.city,
        eventDateLocal: req.body.eventDateLocal
    })

    db.Festival.findOne({name: req.body.name}),function(err, foundFestival){
        if (err) 
            return res.err('Sorry, festival already exists', {
        });
        if (foundFestival != undefined || foundFestival != null)
          return res.send('Sorry, already exists', {
        });
    }


    festival.save(function(err, user){
        if (err) 
            res.send("there was an error" + err);
        else
        res.send("festival saved")
    })

})

//update
router.put('/search/:id', function(req, res){
    db.Festival.findOneAndUpdate({_id: req.params.id }, {$set: {name: req.body.name}}, {new: true}, function(err, festivals){
      if (err) {return console.log("You failed:", + err)}
      res.json(festivals);
    })
})


//delete festival from the list
router.delete('/search/:id', function(req,res){
    console.log(req.params)
    let festivalId = req.params.id;
    

    db.Festival.findOneAndRemove({_id: festivalId}, function(err, deletedFestival){
        if (err) 
            console.log("fucked shit up" + err);
        res.json(deletedFestival)
    })
})
    

module.exports = router;




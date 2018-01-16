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
router.get('/signup', function(req, res){
    res.render('signup.ejs', {message: req.flash('signupMessage')});
});

router.post('/signup', function(req, res, next){
    let signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    });

    return signupStrategy(req, res, next);
});

router.get('/login', function(req, res){
    res.render('login.ejs', {message: req.flash('loginMessage')})
});

router.post('/login', function(req, res, next){
    console.log('attempting to')
    let loginStrategy = passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true  
    });
    return loginStrategy(req, res, next);
});




//website routes
router.get('/newEvent', function(req, res){
    res.sendfile(path.join(process.cwd(),"/views/index.html"))   
})

router.get('/search', function(req,res){
    res.sendfile(path.join(process.cwd(),"/views/search.html"))
})


//get index of events
router.get('/events', function (req, res){
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
router.get('/events/:id', function (req, res){
    console.log(headers)
    axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
        .then(function(response,body){
            let concert = {
                name: response.data.events[0].name,
                venue: response.data.events[0].venue.name,
                city: response.data.events[0].venue.city,
                eventDateLocal: response.data.events[0].eventDateLocal
            }
            res.send(concert);
        })
        .catch(function(error){
            console.log(error)
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


//delete festival from the list
router.delete('/events/:id'), function(req,res){
    console.log(req.params)
    let festivalId = req.params.id;

    db.Festival.findOneAndRemove({ _id: festivalId}, function(err, deletedFestival){
        res.json(deletedFestival)
    })
}
    

module.exports = router;




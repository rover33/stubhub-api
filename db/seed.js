let db = require("../models")
let express = require('express'),
    app = express(),
    request = require('request'),
    axios = require('axios');
    require('dotenv').config()

    const headers = { 
        "Content-Type": process.env.CONTENT_TYPE,
        "Authorization": process.env.AUTHORIZATION
    }
    
    
axios.get("https://api.stubhub.com/search/catalog/events/v3?status=active |contingent&name=music festival", {headers: headers})
        .then(function(response,body){
            var festivals = response.data.events
            db.Festival.remove({}, function(err, removedFest){
                if (err) { return console.log('ERROR', err);
            
            }
            for (var i = 0; i < festivals.length; i++){
                console.log(festivals[i].name)
                db.Festival.create({
                    name: festivals[i].name,
                    venue: festivals[i].venue.name,
                    city: festivals[i].venue.city,
                    eventDateLocal: festivals[i].eventDateLocal
                // console.log(festival)
                }, function(err, festivals){
                    console.log(festivals)
                })

            }
            // process.exit();
        })
    })


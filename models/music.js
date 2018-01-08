var keys = require("./index.js")

var request = require('request')

function get(events){
    request("https://api.stubhub.com/search/catalog/events/v3", function(error, response, body){
    var y = JSON.parse(body)
    console.log(events)
    });
}

module.exports = get;
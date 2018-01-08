var keys = require("./index.js")

var request = require('request')

var axios = require('axios');

function get(keys){
    axios.get("https://api.stubhub.com/search/catalog/events/v3", function(error, response, body){
    JSON.parse(body)
    console.log(body)
    });
}

module.exports = get;